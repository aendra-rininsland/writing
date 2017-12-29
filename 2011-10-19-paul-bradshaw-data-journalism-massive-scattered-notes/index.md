---
path: "content/paul-bradshaw-data-journalism-massive-scattered-notes"
layout: Post
title: "Paul Bradshaw Data Journalism Massive -- scattered notes"
date: 2011-10-19 16:47:07
---

# Scraping
+ Tools:
    + OutWit Hub
    + Needlebase
    + Scraperwiki
    + Google Spreadsheets
    + Formulae
+ Walkthru using Google Docs (=import)
    1. Open a spreadsheet
    2. In A1, type the URL of a page with a table.
    3. In cell A2, type: **=ImportHTML(A1, "table", 1)**
    4. Function importHTML(*$source*, *$element*, *$index*)
        + Source = Where you're getting data from. Can be a spreadsheet cell.
        + Object = Which type of object in the HTML document you want to parse. Likewise.
        + Index = Which object? Ditto.
+ Use Google News RSS; Google Alerts
+ Set up a regular supply of data:
    + RSS for regulators, campaigns, gov, EU, ONS, data.gov.uk
    + RSS feeds for WDTK, OpenlyLocal, OpenCorporates, OpenCharities, disclosure logs
+ Advanced spreadsheet stuff:
    + "filetype:", "site:" do what you expect.
    + "~" is for synonyms
##### lunchbreak

+ Using importXML(*$url*, *$xpath*)
    + Useful xpaths:
        + "//div[starts-with(@class, 'jobWrap')]"
        + "//p[starts-with(@style, 'font-size: 10pt')]"
    + =transpose($range) changes from rows to columns.

### For next class:
+ *Play around with some scraping tools and write a blog about it.*
+ *Start shaping your project.* 