---
path: "content/rss-feed-planning-applications-and-appeals-hackney"
layout: Post
title: "RSS feed of planning applications and appeals in Hackney"
date: 2012-01-03 19:53:45
---

**UPDATED:** Now allows you to filter based on a comma-separated list of wards! More accurate application geolocation data based on eastings/northings! Wicked, yo! See below!

Ever wanted a way to learn about planning applications and appeals in the London borough of Hackney? The borough council's website has an ASP-driven search tool for both applications and appeals, but no way to get the latest ones in something as convenient as an RSS feed.

To this end I've built two scrapers via [ScraperWiki](http://www.scraperwiki.com) ([Applications](https://scraperwiki.com/scrapers/hackney_planning_simpletest_browser_attempt_1/) and [Appeals](https://scraperwiki.com/scrapers/hackney_planning_appeal_simpletest_browser/)), which are feeding a [view](https://scraperwiki.com/views/hackney_council_planning_and_appeals_rss_output/) outputting [GeoRSS](http://www.georss.org). To add it to Google Reader or another RSS-based tool:

* For a combined listing of both applications and appeals, regardless of geolocation success, use:
    * https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?
* For just applications, use:
    * https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?feed=applications
* For just appeals, use:
    * https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?feed=appeals
* **New!** To return only records in specific wards, use ward=[comma-separated list of wards]
    * Example: https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?wards=De%20Beauvoir,Olympic%20Development%20Authority
        * This returns all records that are either in De Beauvoir or through the Olympic Development Authority (Replace spaces with %20!)
* To output only records with latitude/longitude data, add &strict=true to the end. See note below.
    * Combined: https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?strict=true
    * Just applications: https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?feed=applications&strict=true
    * Just appeals: https://views.scraperwiki.com/run/hackney_council_planning_and_appeals_rss_output/?feed=appeals&strict=true

<strike>Note: I geolocate using ScraperWiki's built-in functions, which are dependent upon postal code. I may try to update the scrapers in the future to grab Eastings and Northings as applications related to sites without a postal code (for instance, those involving forthcoming Olympic sites) won't geocode and thus be omitted using the "strict=true" flag.</strike> I've updated the script to grab eastings/northings for applications so they're way more accurate. Note that eastings/northings data is not available for appeals, which still use postal code geolocation and may thus be less accurate (Or lacking geolocation data in the unlikely event it's an appeal without a postal code.).

To see how this could be used in a more interesting way than just Google Reader, check out this [RSSMapper Google Maps/geoRSS mashup](http://www.rssmapper.com/map/map?id=201112111844033) I made. 

**Special thanks to [Ross Jones](https://twitter.com/rossjones) who spent over an hour helping me figure out why my regex wouldn't work with the Hackney Council planning application search output.**