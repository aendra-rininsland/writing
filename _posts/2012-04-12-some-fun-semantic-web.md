---
path: "content/some-fun-semantic-web"
layout: Post
title: "Some fun with the semantic web"
date: 2012-04-12 19:31:28
---

I've recently been playing with the semantic web (for the uninitiated, the semantic web is a structuring of web content in terms of what it depicts instead of just a bunch of linked text files) and have come up with the following two queries -- let me know if you find these useful!

For SPARQL (I.e., [dbpedia](http://www.dbpedia.org)), the following should return how many competitors each country is sending to the London 2012 Olympics:

~~~
SELECT ?country ?competitors WHERE {
?s foaf:page ?country . 
?s rdf:type <http://dbpedia.org/ontology/OlympicResult>.
?s <http://dbpedia.org/property/games> "2012"^^<http://www.w3.org/2001/XMLSchema#int> .
?s dbpprop:competitors ?competitors
} order by desc(?competitors)
~~~

See results by going [here.](http://live.dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+%3Fcountry+%3Fcompetitors+WHERE+%7B%0D%0A%3Fs+foaf%3Apage+%3Fcountry+.+%0D%0A%3Fs+rdf%3Atype+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2FOlympicResult%3E.%0D%0A%3Fs+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2Fgames%3E+%222012%22%5E%5E%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23int%3E+.%0D%0A%3Fs+dbpprop%3Acompetitors+%3Fcompetitors%0D%0A%7D+order+by+desc%28%3Fcompetitors%29&should-sponge=grab-all&format=text%2Fhtml&timeout=0&debug=on)

Meanwhile, if you want a MQL query (I.e., [Freebase](http://www.freebase.org)), use the following to give a comprehensive array of Golden Raspberry Award "winners":

~~~
		query: {
			  "id": "/en/golden_raspberry_awards",
			  "type": "/award/award",
			  "category": [{
				"name": null,
				"name!=" : "Razzie Award for Worst Actor of the Decade", 
				"AND:name!=" : "Razzie Award for Worst Actress of the Decade",
				"nominees": [{          
					  "year": null,
					  "award_nominee": [],
					  "nominated_for": [],
					 "sort": "-year"
					}], /* nominees */
				"winners": [{
				  "s1:/type/reflect/any_master" : [{
					"type": "/award/award_winner",
					"name": null,
					"key" : [{
					  "namespace" : "/wikipedia/en",
					  "value": null,
					  "limit": 1
						}] /* key */
					}], /* award_winner */
				  "s2:/type/reflect/any_master" : [{
					"type": "/award/award_winning_work",
					"name": null,
					}] /* award_winning_work */
				}] /* winners */
			}] /* category */
		}  /* query */  	
~~~

Output [here](https://api.freebase.com/api/service/mqlread?query={"query":{"id":"/en/golden_raspberry_awards","type":"/award/award","category":[{"name":null,"nominees":[{"year":null,"award_nominee":[],"nominated_for":[],"sort":"-year"}],"winners":[{"/type/reflect/any_master":[{"type":"/award/award_winning_work","name":null}]}]}]}}).

I'll be writing a fairly comprehensive blog tutorial on this sometime in the next few weeks; follow me on [Twitter](http://www.twitter.com) for updates.