---
path: "content/migrate-wordtour-openmusicfestival"
layout: Post
title: "Migrate from WordTour to OpenMusicFestival"
date: 2013-04-09 11:45:53
---

The reason I created [OpenMusicFestival](http://www.openmusicfestival.com) in the first place was so that I could migrate [MotionNotion.com](http://www.motionnotion.com) from WordPress (And its unsupported WordTour plugin) to Drupal 7.

While I suspect my original use of WordTour for a music festival was slightly weird (The system was designed for small record labels, but relationship between artists, events and venues made it work for my purposes), I'm releasing my Artist migration class in case somebody finds it useful and wants to migrate to OpenMusicFestival. Note that this only migrates Artists — the Event and Venues parts are incomplete (On that note, if somebody wants to do those, I'll happily both give you credit on the project as well as include the code with OMF.).

```php migrate_wordtour.php
<?php
/**
 * @file
 *  Migrate content from WordTour (WP) to OMF (Drupal)
 *
 *  NOTE: THIS IS WOEFULLY INCOMPLETE. I would *love* to give somebody credit
 *  for tidying up and completing this.
 */

class WordTourMigration extends Migration {
  public $wp_prefix = 'wp_'; //This is the entire first part of the table name.
  public $wp_db = '';
  public $wp_user = '';
  public $wp_pass = '';
  public $wp_host = 'localhost';

  public function __construct() {
    // Always call the parent constructor first for basic setup
    parent::__construct();

    // With migrate_ui enabled, migration pages will indicate people involved in
    // the particular migration, with their role and contact info. We default the
    // list in the shared class; it can be overridden for specific migrations.
    $this->team = array(
      new MigrateTeamMember('Ændrew Rininsland', 'aendrew@aendrew.com', t('Developer')),
    );

    // Individual mappings in a migration can be linked to a ticket or issue
    // in an external tracking system. Define the URL pattern here in the shared
    // class with ':id:' representing the position of the issue number, then add
    // ->issueNumber(1234) to a mapping.
    $this->issuePattern = 'http://drupal.org/node/:id:';
  }
}

/**
 * There are four essential components to set up in your constructor:
 *  $this->source - An instance of a class derived from MigrateSource, this
 *    will feed data to the migration.
 *  $this->destination - An instance of a class derived from MigrateDestination,
 *    this will receive data that originated from the source and has been mapped
 *    by the Migration class, and create Drupal objects.
 *  $this->map - An instance of a class derived from MigrateMap, this will keep
 *    track of which source items have been imported and what destination objects
 *    they map to.
 *  Mappings - Use $this->addFieldMapping to tell the Migration class what source
 *    fields correspond to what destination fields, and additional information
 *    associated with the mappings.
 */
class ArtistMigration extends WordTourMigration {
  public function __construct() {
    parent::__construct();

    //Set up other database
    Database::addConnectionInfo('wp', 'default', array(
          'driver' => 'mysql',
          'database' => $this->wp_db,
          'username' => $this->wp_user,
          'password' => $this->wp_pass,
          'host' => $this->wp_host,
          'prefix' => $this->wp_prefix,
        ));

    $this->description = t('Migrate the artists!');

    $this->map = new MigrateSQLMap($this->machineName,
        array(
          'artist_id' => array(
                           'type' => 'int',
                           'length' => 7,
                           'not null' => TRUE,
                           'description' => 'Artist ID',
                          )
        ),
        MigrateDestinationNode::getKeySchema()
      );

    $query = Database::getConnection('default', 'wp')
           ->select('wtr_artists', 'a');
    $query->join('wtr_attachment', 'at', 'a.artist_id = at.attachment_target_id');
    $query->join('wtr_attachment', 'att', 'a.artist_id = att.attachment_target_id');
    $query->join('postmeta', 'pm', 'pm.post_id = att.attachment_type_id');
    $query->fields('a',
              array(
                  'artist_id',
                  'artist_name',
                  'artist_publish_date',
                  'artist_bio',
                  'artist_record_company',
                  'artist_social_links',
              )
            );
    //$query->fields('att', array('attachment_info'));
    $query->fields('pm', array('meta_value'));
    //$query->addField('pm', 'meta_value', 'photo');
    $query->addExpression('GROUP_CONCAT(DISTINCT at.attachment_info)', 'genres'); //Pull in genres.
    $query->condition('at.attachment_target', 'artist');
    $query->condition('at.attachment_type', 'genre');
    $query->condition('att.attachment_type', 'thumbnail');
    $query->condition('pm.meta_key', '_wp_attached_file');
    $query->groupBy('a.artist_id');


    // Create a MigrateSource object, which manages retrieving the input data.
    $this->source = new MigrateSourceSQL($query, array(), NULL, array('map_joinable' => FALSE));

    // Set up our destination
    $this->destination = new MigrateDestinationNode('artist', array('text_format' => 'full_html'));

    // Assign mappings TO destination fields FROM source fields.
    $this->addFieldMapping('title', 'artist_name');
    $this->addFieldMapping('uid')
         ->defaultValue(1);
    $this->addFieldMapping('changed', 'artist_publish_date');
    $this->addFieldMapping('status')
         ->defaultValue(1);
    $this->addFieldMapping('promote', '')
         ->defaultValue(0);
    $this->addFieldMapping('sticky', '')
         ->defaultValue(0);
    $this->addFieldMapping('revision')
         ->defaultValue(0);
    $this->addFieldMapping('log')
         ->defaultValue('Migrated to Drupal 7 from WordPress.');
    $this->addFieldMapping('comment')
         ->defaultValue(1);
    $this->addFieldMapping('body', 'artist_bio')
          ->arguments(array('format' => 'full_html'))
          ->description('See prepareRow()');
    $this->addFieldMapping('created', 'artist_publish_date');
    $this->addFieldMapping('field_labels', 'artist_record_company')
          ->separator(', ')
          ->arguments(array('create_term' => true));
    //$this->addFieldMapping('path', '');
    //$this->addFieldMapping('pathauto', '');
    $this->addFieldMapping('field_photo', 'meta_value');
    $this->addFieldMapping('field_photo:source_dir')
         ->defaultValue('/Users/aendrew/Sites/mn_wp');
    $this->addFieldMapping('field_photo:preserve_files')
         ->defaultValue(true);
    $this->addFieldMapping('field_photo:destination_file', 'meta_value');
    $this->addFieldMapping('field_photo:file_replace')
         ->defaultValue(MigrateFile::FILE_EXISTS_REUSE);
    $this->addFieldMapping('field_photo:alt', 'artist_name');
    $this->addFieldMapping('field_photo:title', 'artist_name');
    $this->addFieldMapping('field_links', 'artist_social_links')
         ->description('See prepare()'); //Needs to be unserialized
    $this->addFieldMapping('field_genres', 'genres')
          ->separator(',')
          ->arguments(array('create_term' => true));
  }

  public function prepareRow($row) {
    //Prepare Thumbnails
    $thumb = trim($row->meta_value);
    //watchdog('migrate', 'Filename is ' . $thumb);
    $row->meta_value = 'wp-content/uploads/' . $thumb;
  }

  public function prepare(stdClass $node, stdClass $row) {
    //Set up the links
    $links = unserialize($row->artist_social_links);
    $empty = 'a:10:{s:13:"artist_flickr";s:0:"";s:14:"artist_youtube";s:0:"";s:12:"artist_vimeo";s:0:"";s:15:"artist_facebook";s:0:"";s:14:"artist_twitter";s:0:"";s:13:"artist_lastfm";s:0:"";s:14:"artist_myspace";s:0:"";s:15:"artist_bandcamp";s:0:"";s:13:"artist_tumblr";s:0:"";s:19:"artist_reverbnation";s:0:"";}';
    if ($node->field_links[LANGUAGE_NONE][0]['url'] == $empty) {
      unset($node->field_links);
    } else {
      $i = 0;
      foreach ($links as $site => $link) {
        if (!empty($link)) {
          $site_name = ucfirst(str_replace('artist_', '', $site));
          if ($site_name == "Youtube") $site_name = "YouTube";
          if ($site_name == "Lastfm") $site_name = "Last.fm";
          if ($site_name == "Youtube") $site_name = "YouTube";
          if ($site_name == "Myspace") $site_name = "MySpace";
          $node->field_links[LANGUAGE_NONE][$i]['title'] = $site_name;
          $node->field_links[LANGUAGE_NONE][$i]['url'] = urldecode($link);
          $i++;
        }
      }
    }
  }
}
```

Did this help you out? Have I saved you a tonne of time? Please leave me a comment letting me know!