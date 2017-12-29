---
path: "content/importing-proprietary-user-database-buddypress-boss"
layout: Post
title: "Importing a proprietary user database into BuddyPress like a boss"
date: 2012-04-09 20:03:03
---

### Disclaimer: this may have changed in more recent versions of BuddyPress, so your mileage may very substantially. Please let me know if something's not working, but caveat lector none of this comes with any warranty or support whatsoever.

A bit over a year ago, I [asked a question](http://wordpress.stackexchange.com/questions/4948/importing-users-to-buddypress-with-custom-fields) on the [WordPress Stack Exchange site](http://wordpress.stackexchange.com) about importing content from a proprietary database into [BuddyPress](http://www.buddypress.org), the "social network in a box" plugin for [WordPress](http://www.wordpress.org). Not getting anything resembling a response, I ended up writing a whole schwack of MySQL statements. After answering my question on SO, I've averaged about an email every 4-6 months about how I managed to do what I did. Alas, I was a total jerk and couldn't find the SQL I use and ended up ignoring most of them.

**Until today!**

Note that the following is **not** a one-click script that will import your users. It's a starting point I'm posting in hopes that somebody finds it useful. You **will** need to modify it for your purposes, and *please, please, **PLEASE*** don't use this on a production database, and make backups frequently. I take no responsibility if you screw something up with it!

Also attached to this post is an importer script [Michael Dimunation](http://www.dimunation.com) sent me awhile back after I emailed him the SQL query in question. I have no idea what it does and have never used it -- again, same caveats apply, but hopefully somebody finds it useful.

## proprietary_to_wp.sql

~~~~


/* Query 1 */

INSERT INTO `WORDPRESS`.`wp_users` (`user_login`, `user_pass`, `user_nicename`, `user_email`,  `user_registered`, `display_name`)

SELECT 
a.`username` as `user_login`,
MD5(a.`password`) as `user_pass`,
CONCAT(a.`first_name`,'-',a.`last_name`) as `user_nicename`,
b.`location_name` as `user_email`,
a.`row_created_date` as `user_registered`,
CONCAT(a.`first_name`,' ',a.`last_name`) as `user_displayname`

FROM `ORIGINAL`.`business_associate` AS a

LEFT JOIN `ORIGINAL`.`ba_contact_info` AS b ON b.`business_associate` = a.`business_associate` AND b.`location_id` = 'email'
WHERE a.`ba_type` = 'person';


/* Query 2 -- First Name */

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'first_name' as `meta_key`,
SUBSTRING_INDEX(`display_name`, ' ', 1) as `meta_value`

FROM `WORDPRESS`.`wp_users`;

/* Query 3 -- Last Name */

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'last_name' as `meta_key`,
SUBSTRING(`display_name`, INSTR(`display_name`, ' ')) as `meta_value`

FROM `WORDPRESS`.`wp_users`;


/* Query 4 -- Nick Name */

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'nickname' as `meta_key`,
`display_name` as `meta_value`

FROM `WORDPRESS`.`wp_users`;

/* Query 5 -- Last Activity */

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'last_activity' as `meta_key`,
'2010-12-06 20:46:27' as `meta_value`

FROM `WORDPRESS`.`wp_users`;


/* Broken from here ... 

//user privs query 5.1

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'wp_capabilities' as `meta_key`,
'a:1:{s:15:'s2member_level1';s:1:'1';}' as `meta_value`

FROM `WORDPRESS`.`wp_users` 

WHERE `ID` != '1' OR '247' OR '379';

//user level query 6

INSERT INTO	`WORDPRESS`.`wp_usermeta` (`user_id`, `meta_key`, `meta_value`)

SELECT
`ID` as `user_id`, 
'wp_user_level' as `meta_key`,
'0' as `meta_value`

FROM `WORDPRESS`.`wp_users`;

 ...broken to here */


/* Query 7 -- BP Name */

INSERT INTO `WORDPRESS`.`wp_bp_xprofile_data` (`field_id`, `user_id`, `value`, `last_updated`)

SELECT
'1' as `field_id`,
`ID` as `user_id`,
`display_name` as `value`,
NOW() as `last_updated`
FROM `WORDPRESS`.`wp_users`;


/* Query 8 -- BP Phone */

INSERT INTO `WORDPRESS`.`wp_bp_xprofile_data` (`field_id`, `user_id`, `value`, `last_updated`)

SELECT
'4' as `field_id`,
e.`ID` as `user_id`,
c.`location_name` as `value`,
NOW() as `last_updated`

FROM `ORIGINAL`.`business_associate` as a

LEFT JOIN `ORIGINAL`.`ba_contact_info` AS b ON b.`business_associate` = a.`business_associate` AND b.`location_id` = 'email'
LEFT JOIN `ORIGINAL`.`ba_contact_info` AS c ON c.`business_associate` = a.`business_associate` AND c.`location_id` = 'phone' 
LEFT JOIN `ORIGINAL`.`ba_contact_info` AS d ON d.`business_associate` = a.`business_associate` AND d.`location_id` = 'fax'
LEFT JOIN `WORDPRESS`.`wp_users` as e ON e.`user_login` = a.`username`
WHERE `ba_type` = 'person';


/* Query 9 -- BP Fax */

INSERT INTO `WORDPRESS`.`wp_bp_xprofile_data` (`field_id`, `user_id`, `value`, `last_updated`)

SELECT
'5' as `field_id`,
e.`ID` as `user_id`,
d.`location_name` as `value`,
NOW() as `last_updated`

FROM `ORIGINAL`.`business_associate` as a

LEFT JOIN `ORIGINAL`.`ba_contact_info` AS d ON d.`business_associate` = a.`business_associate` AND d.`location_id` = 'fax'
LEFT JOIN `WORDPRESS`.`wp_users` as e ON e.`user_login` = a.`username`
WHERE `ba_type` = 'person';


/* Query 10 -- BP Email */

INSERT INTO `WORDPRESS`.`wp_bp_xprofile_data` (`field_id`, `user_id`, `value`, `last_updated`)

SELECT
'6' as `field_id`,
e.`ID` as `user_id`,
d.`location_name` as `value`,
NOW() as `last_updated`

FROM `ORIGINAL`.`business_associate` as a

LEFT JOIN `ORIGINAL`.`ba_contact_info` AS d ON d.`business_associate` = a.`business_associate` AND d.`location_id` = 'email'
LEFT JOIN `WORDPRESS`.`wp_users` as e ON e.`user_login` = a.`username`
WHERE `ba_type` = 'person';


/* Query 11 -- BP Company */

INSERT INTO `WORDPRESS`.`wp_bp_xprofile_data` (`field_id`, `user_id`, `value`, `last_updated`)

SELECT
'2' as `field_id`,
e.`ID` as `user_id`,
f.`ba_name` as `value`,
NOW() as `last_updated`

FROM `ORIGINAL`.`business_associate` as a

LEFT JOIN `ORIGINAL`.`ba_employee` AS d ON d.`employee_ba_id` = a.`business_associate`
LEFT JOIN `WORDPRESS`.`wp_users` as e ON e.`user_login` = a.`username`
INNER JOIN `ORIGINAL`.`business_associate` as f ON f.`business_associate` = d.`employer_ba_id`

WHERE a.`ba_type` = 'person';
~~~~
