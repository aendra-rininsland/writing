---
path: "content/visualizing-unodc"
layout: Post
title: "Visualizing the UNODC"
date: 2011-12-06 15:24:28
---

The [UNODC's yearly World Drug Report](www.unodc.org/unodc/en/data-and-analysis/WDR-2011.html) is always a fun piece of data to play with. For my data journalism course, I've used some of their stats to visualize aspects of it.

Below I've done a bubble chart showing consumption data. The size of the bubble shows total regional consumption, while each slice shows regional consumption of each drug.

What does any of it mean? Well, two really obvious things:

1. Cannabis is the world's illicit drug of choice.
2. North America consumes way, *way* more drugs than anywhere else.

<script type="text/javascript" src="http://www-958.ibm.com/me/visualizations/6b1554ea0c6f11e18f0a000255111976/comments/6b1b0ec60c6f11e18f0a000255111976.js"></script>

For another, I visualized where all the opium production in Afghanistan for 2010 is located:

<iframe width="500px" height="300px" scrolling="no"  src="https://www.google.com/fusiontables/embedviz?viz=MAP&q=select+col0%3E%3E1+from+2261718+&h=false&lat=32.450588904271136&lng=65.55159358842504&z=5&t=1&l=col0%3E%3E1"></iframe>


#### Notes: 

* The global drug consumption visualization sses lower estimates. For a chart that displays both, see: <a href="http://www-958.ibm.com/software/data/cognos/manyeyes/visualizations/global-drug-consumption-by-region">Global drug consumption by region 2011</a>.
* Opiate estimates for Europe - where countries reported only opioid estimates - were derived by using the distribution of opiate users within the overall number of opioid users in treatment.
* No data was available for the following:
    * **Cocaine:**
        * East Africa
        * Central Asia
        * South Asia
    * **Amphetamines:**
        * East Africa
        * North Africa
        * West and Central Africa
        * Central Asia
        * South Asia
    * **Ecstasy:**
        * East Africa
        * North Africa
        * West and Central Africa
        * Central Asia
        * South Asia
        * Near and Middle East
* Cohorts lacking data should *not* be interpreted as having no users; rather, that the UNODC was not able to reliably estimate the number of users.

<a href="http://www-958.ibm.com/software/data/cognos/manyeyes/datasets/fba0c28e0c6e11e18f0a000255111976/versions/1">(Full dataset at Manyeyes)</a>
