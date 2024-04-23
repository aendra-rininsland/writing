---
path: "posts/my-top-bluesky-feature-requests-for-2024"
layout: Post
title: My top Bluesky feature requests for 2024
date: 2024-01-02T00:00:00
---

In 2023 my social media consumption changed dramatically after I DM'd a random mufo on what-was-then-called Twitter for a Bluesky invite.

At the time, I was floating between Twitter itself and Mastodon for my primary daily social media experience. On one hand, I loathed Twitter (and continue to loathe its replacement, the Elon Musk-owned "𝕏") due to its endless bigotry and unwillingness to moderate hatred. I'd long since abandoned it for Mastodon, where I'd frequently found myself posting since 2017. As a creative technologist with a background in print journalism, however, I'd always found the Fediverse's total antipathy towards news media frustrating, and suspected it would be impossible for it to gain the sort of momentum that would lend it to being a worthwhile replacement for "birbsite" (as Twitter's referred to there). Meanwhile, I was paying around $30 USD a month for my single-user Masto.host instance and I constantly found myself wondering whether Mastodon's infrastructure was equipped for the task.

In rolls Bluesky. When I joined it had less than a quarter of a million users — it's now approaching 3 million.

From a journalism/media standpoint, Bluesky offers quite a number of advantages over the Fediverse:

The endless moderation squabbles resulting in instance defederation simply don't happen on Bluesky (yet, anyway). I've long since thought that Mastodon's culture cannot support journalism because it's incredibly fragmented and there's a tendency to not just throw the baby out with the bathwater but the entire bathroom as well — example being how quickly Journa.host and Newsie.social ran afoul of #fediblock due to hosting a small number of transphobic accounts. Another example is how the entire Scots language instance got blocked across the Fediverse simply because it had a single retired police officer on it. Yet another example is when the constellation of instances launched by the BBC was blocked for reasons similar to Journa and Newsie.

Trust me when I say I fully understand and appreciate the need for the Fediverse to be a safe space for queer, black and other minority users. Indeed, as a fairly nascent trans woman, the safety of the Fediverse was incredibly instrumental for not only finding my own voice as a queer writer, but also exploring my gender; I'll be forever grateful for it. Yet, some part of me feels strongly that the "federate by default, public by default" nature of the Fediverse is a huge driver of these issues. Sure, the #fediblock hashtag is super effective for deplatforming the most viciously-hateful instances joining the network, but it's also used to pressure admins to block instances with users people actually want to talk to. Not only that, considering every non-transphobic user of an instance to be acceptable collateral damage for blocking the few that are plays right into the "Cancel Culture" narratives of the far-right.

Bluesky currently uses a combination of machine learning (for images) and manually-curated block/mutelists (for everything else) to prevent being enveloped by the toxicity that has largely overtaken Twitter and Facebook. Further, the design of Bluesky means that service provision is effectively separated from moderation, so I suspect it will avoid much of the network fragmentation that periodically overtakes the Fediverse. This remains to be seen, however.

News orgs don't need to find (or start!) an instance. One idea I suggested at the Financial Times during the initial downfall of Twitter in late 2022 was the creation of a "social.ft.com" Mastodon instance for journalists to post from. This never happened, though the FT's Alphaville blog tried it themselves at one point and abruptly shut it down after the compliance, security and reputation risks were "judged serious enough to exercise management at the highest levels."

As someone who has run multiple instances previously, including one specifically for journalists I shut down less than a week prior to The Muskening for reasons related to the first point in this list, I absolutely get where FTAV is coming from on that; indeed, ensuring legal compliance is increasingly a concern on the Fediverse, particularly in the context of GDPR (to wit — for quite awhile I had a cracking time submitting Article 15 requests to various projects attempting to scrape content from the network. Most were incredibly ill-prepared to honour the request, some even shut down in response.).

On Bluesky, you can have an authoritative presence simply by associating a domain name with your unique decentralised identifier string (hereafter DID, as it's referred to on Bluesky) as your handle, which is what I did with @financialtimes.com.

Journalists aren't chained to an instance and can self-verify. On Mastodon, you can migrate from one instance to another, but that effectively sets up a redirect that points your existing followers to your new account and auto-refollows you there (if your account is locked, users are required to re-request access). Further, if the instance you're migrating from doesn't want to play ball in setting up the redirect (say, for instance, you're a journalist leaving a title for a competitor and your previous employer considers your followers their property), you're out of luck and have to start rebuilding your following from scratch. Even when it goes well, you'll still lose some followers.

On Bluesky, all content is associated with your DID and your handle/username is resolved separately. Effectively this means that I could swap from e.g. @aendra.thetimes.co.uk to @aendra.ft.com without losing all of my posts and followers (so far, I've not seen any news orgs try this style of journalist verification but it's pretty easy to set up by dynamically populating the .well-known endpoint on your domain).

It's a fun platform to develop on. The API is fairly well-documented and not particularly challenging to get started with, and nobody's going to freak out at you for building something using the technology (as frequently happens on the Fediverse), or charge you obscene amounts to use it (as is definitely the case on X).

These benefits all culminated in me being a strong advocate for Bluesky at the FT, where many of our journalists have now joined. In addition to setting up the FT's institutional user (which now has nearly 10k followers), I also created several "custom feeds" (uniquely constructed streams of posts that can be used for a variety of purposes), including a feed of only FT staff posts and replies, a feed for data visualisations tagged with the "📊" emoji, and the "📰 News" feed — Bluesky's most popular source of headlines from news orgs who've self-verified themselves via domain name.

As we enter 2024, this year honestly really scares me.

In my day job, I'm frequently tasked with building infrastructure and visualisations for all kinds of elections. This year we have major elections in not only the U.S. and U.K., but worldwide — 41% of people on Earth will cast a vote this year.

Meanwhile, the information ecosystem hasn't been this bad since 2016. Speaking as someone who started her current job two weeks after the Brexit referendum and two months before the Trump election, it feels like we're sleepwalking towards another half decade of swingeing disinformation. It chills me to the bone to think of how much infrastructure relies on a social media service that can be effortlessly manipulated by a malevolent capitalist who, to say the very least, has not exactly had a sterling reputation for either reliability or exercising restraint.

Bluesky needs to be fit for purpose by November. If it isn't, I worry it will be an even worse vector for disinformation given there currently isn't a dedicated way to flag it and no equivalent to X's "Community Notes" function, flawed as it often is.

What follows are my top feature requests for Bluesky as we head into an incredibly challenging election year. Some of these are already in development and close to release, others are much further down the road.

Scoped OAuth
Earlier last month, 3rd-party analytics tool "Twexit" was the subject of several simultaneous vulnerability discoveries, some of which included full account takeover. The only security affordance Bluesky currently makes for 3rd party apps is the ability to create an "app password", effectively a revokable token that gives a 3rd party more-or-less full access to one's account.

Allowing 3rd-party developers to specify which permissions they actually need via scoped OAuth tokens like Mastodon, as well as give access providers the ability to halt access to a compromised app, would do wonders in terms of reducing blast radius when a vulnerability is found in the wild. According to Bluesky protocol engineer Bryan Newbold, this is actively in development.

2-Factor Authentication (2FA)
I honestly can't overstate how important this is. Journalists are constantly the target of phishing attacks and 2FA is one of the few things that helps protect against those. It wouldn't even need to be a full implementation with SMS messages and everything, simply requiring users click an emailed link before logging in would still be a vast improvement.

According to Newbold, this is currently being worked on but currently blocked by the OAuth work (see above thread).

3rd-party labeller support
One incredibly exciting feature that's in development is the ability to create and use 3rd party "labellers", which are services that add additional metadata to posts that users can then use to automatically show/warn/hide content. Currently, Bluesky employs a 1st-party automated labeller that adds labels like "pornography" to images, enabling such content to be toggled via settings in the "Moderation" palette.

3rd-party labellers thus hold the promise of "composable moderation", whereby you can construct a social media experience that reflects your own moderation and safety needs. I suspect this will be key in fighting disinformation this year, provided it rolls out in time (there are indications that could be fairly soon). It probably wouldn't be particularly difficult to create an interface much like X's Community Notes functionality as a custom labeller, for instance.

Sharing API
This is being tracked in this GitHub issue. The ability to share posts to Bluesky from 3rd party websites is something that I definitely find lacking as a developer in the journalism space. This is a pretty easy fix, I might try doing a pull request for it myself if I get bored (By the way! Bluesky is open source! You can literally just do that.).

Edit: I stand corrected, this would be a fairly easy fix for a web-only thing but apparently it's much more challenging in React Native.

Muted words
Sometimes you just want to hide every single post that contains the word "Alf". Muted words are important for preventative moderation, and this system should exist in addition to the labellers.

Private accounts
This one is a biggy and the one that worries me the most at the moment. Being able to take your account private without outright deleting it has traditionally been an important anti-harassment tool; during dogpiles, it's often the only thing you can do short of removing the app from your phone. I've done it myself during some particularly stressful moments on Twitter, and I'm grateful I had the ability to do so. Alas, most language I've read from the Bluesky team seems to indicate this either simply isn't a priority, or is even impossible given the design of the protocol. I hope to be proven wrong on this one.

A better logo for sharing buttons
Just kidding! They released a new logo just the other week. I'm not a huge fan but I don't hate it either. I'm just grateful to see the end of that stock image they were using previously.

I'm sure I can think of a few more (this list assuredly does not include GIFs or DMs; honestly I could care less about those) but this post is long enough already.

Happy 2024! May this be the year we finally begin deshittifying the Internet.

-æ.In 2023 my social media consumption changed dramatically after I DM'd a random mufo on what-was-then-called Twitter for a [Bluesky](https://blueskyweb.xyz/) invite.

At the time, I was floating between Twitter itself and Mastodon for my primary daily social media experience. On one hand, I loathed Twitter (and continue to loathe its replacement, the Elon Musk-owned "𝕏") due to its endless bigotry and unwillingness to moderate hatred. I'd long since abandoned it for [Mastodon](https://hackers.town/@aendra), where I'd frequently found myself posting since 2017. As a creative technologist with a background in print journalism, however, I'd always found the Fediverse's total antipathy towards news media frustrating, and suspected it would be impossible for it to gain the sort of momentum that would lend it to being a worthwhile replacement for "birbsite" (as Twitter's referred to there). Meanwhile, I was paying around $30 USD a month for my single-user [Masto.host](https://www.masto.host) instance and I constantly found myself wondering whether Mastodon's infrastructure was equipped for the task.

In rolls [Bluesky](https://bsky.app/profile/aendra.com). When I joined it had less than a quarter of a million users — it's now approaching 3 million.

From a journalism/media standpoint, Bluesky offers quite a number of advantages over the Fediverse:

- **The endless moderation squabbles resulting in instance defederation simply don't happen on Bluesky (yet, anyway).** I've long since thought that [Mastodon's culture cannot support journalism](https://hackers.town/@aendra/111052058278885321) because it's incredibly fragmented and there's a tendency to not just throw the baby out with the bathwater but the entire bathroom as well — example being how quickly Journa.host and Newsie.social ran afoul of #fediblock due to hosting a small number of transphobic accounts. Another example is how the _entire Scots language instance_ got blocked across the Fediverse simply because it had a single retired police officer on it. Yet another example is when the [constellation of instances launched by the BBC](https://www.bbc.com/rd/blog/2023-07-mastodon-distributed-decentralised-fediverse-activitypub) was blocked for reasons similar to Journa and Newsie.
  Trust me when I say I fully understand and appreciate the need for the Fediverse to be a safe space for queer, black and other minority users. Indeed, as a fairly nascent trans woman, the safety of the Fediverse was incredibly instrumental for not only finding my own voice as a queer writer, but also exploring my gender; I'll be forever grateful for it. Yet, some part of me feels strongly that the "federate by default, public by default" nature of the Fediverse is a huge driver of these issues. Sure, the #fediblock hashtag is super effective for deplatforming the most viciously-hateful instances joining the network, but it's also used to pressure admins to block instances with users people actually want to talk to. Not only that, considering every non-transphobic user of an instance to be acceptable collateral damage for blocking the few that are plays right into the "Cancel Culture" narratives of the far-right.
  Bluesky currently uses a combination of machine learning (for images) and manually-curated block/mutelists (for everything else) to prevent being enveloped by the toxicity that has largely overtaken Twitter and Facebook. Further, the design of Bluesky means that service provision is effectively separated from moderation, so I suspect it will avoid much of the network fragmentation that periodically overtakes the Fediverse. This remains to be seen, however.
- **News orgs don't need to find (or start!) an instance.** One idea I suggested at the [Financial Times](https://www.ft.com/æ) during the initial downfall of Twitter in late 2022 was the creation of a "social.ft.com" Mastodon instance for journalists to post from. This never happened, though the FT's [Alphaville](https://bsky.app/profile/alphaville.ft.com) blog tried it themselves at one point and abruptly shut it down after the compliance, security and reputation risks were ["judged serious enough to exercise management at the _highest levels_."](https://www.ft.com/content/8d995a24-d77c-4208-a3a6-603d8788ebcd)
  As someone who has run multiple instances previously, including one specifically for journalists I shut down less than a week prior to The Muskening for reasons related to the first point in this list, I **absolutely get** where FTAV is coming from on that; indeed, ensuring legal compliance is increasingly a concern on the Fediverse, particularly in the context of GDPR (to wit — for quite awhile I had a cracking time submitting Article 15 requests to various projects attempting to scrape content from the network. Most were incredibly ill-prepared to honour the request, some even shut down in response.).
  On Bluesky, you can have an authoritative presence simply by associating a domain name with your unique decentralised identifier string (hereafter DID, as it's referred to on Bluesky) as your handle, which is what I did with [@financialtimes.com](https://bsky.app/profile/financialtimes.com).
- **Journalists aren't chained to an instance and can self-verify.** On Mastodon, you can migrate from one instance to another, but that effectively sets up a redirect that points your existing followers to your new account and auto-refollows you there (if your account is locked, users are required to re-request access). Further, if the instance you're migrating from doesn't want to play ball in setting up the redirect (say, for instance, you're a journalist leaving a title for a competitor and your previous employer considers your followers _their_ property), you're out of luck and have to start rebuilding your following from scratch. Even when it goes well, you'll still lose some followers.
  On Bluesky, all content is associated with your DID and your handle/username is resolved separately. Effectively this means that I could swap from e.g. @aendra.thetimes.co.uk to @aendra.ft.com without losing all of my posts and followers (so far, I've not seen any news orgs try this style of journalist verification but it's pretty easy to set up by [dynamically populating the .well-known endpoint](https://blueskyweb.xyz/blog/4-28-2023-domain-handle-tutorial#:~:text=How%20can%20I%20set%20and%20manage%20multiple%20subdomain%20handles%3F) on your domain).
- **It's a fun platform to develop on.** The API is fairly well-documented and not particularly challenging to get started with, and nobody's going to freak out at you for building something using the technology (as frequently happens on the Fediverse), or charge you obscene amounts to use it (as is definitely the case on X).

These benefits all culminated in me being a strong advocate for Bluesky at the FT, where many of our journalists have now joined. In addition to setting up the FT's institutional user (which now has nearly 10k followers), I also created several "custom feeds" (uniquely constructed streams of posts that can be used for a variety of purposes), including a feed of only FT staff posts and replies, a feed for data visualisations tagged with the "📊" emoji, and the "[📰 News](https://bsky.app/profile/did:plc:kkf4naxqmweop7dv4l2iqqf5/feed/verified-news)" feed — Bluesky's most popular source of headlines from news orgs who've self-verified themselves via domain name.

**As we enter 2024,** this year honestly really scares me.

In my day job, I'm frequently tasked with building infrastructure and visualisations for all kinds of elections. This year we have major elections in not only the U.S. and U.K., but _worldwide_ — 41% of people on Earth will cast a vote this year.

Meanwhile, the information ecosystem hasn't been this bad since 2016. Speaking as someone who started her current job two weeks after the Brexit referendum and two months before the Trump election, it feels like we're sleepwalking towards another half decade of swingeing disinformation. It chills me to the bone to think of how much infrastructure relies on a social media service that can be effortlessly manipulated by a malevolent capitalist who, to say the very least, has not exactly had a sterling reputation for either reliability or exercising restraint.

**Bluesky needs to be fit for purpose by November.** If it isn't, I worry it will be an even worse vector for disinformation given there [currently isn't a dedicated way to flag it](https://github.com/bluesky-social/social-app/issues/1585) and no equivalent to X's "Community Notes" function, flawed as it often is.

What follows are my top feature requests for Bluesky as we head into an incredibly challenging election year. Some of these are already in development and close to release, others are much further down the road.

1.  **Scoped OAuth  
    **Earlier last month, 3rd-party analytics tool "Twexit" was the subject of several simultaneous vulnerability discoveries, some of which included full account takeover. The only security affordance Bluesky currently makes for 3rd party apps is the ability to create an "app password", effectively a revokable token that gives a 3rd party more-or-less full access to one's account.
    Allowing 3rd-party developers to specify which permissions they actually need via [scoped OAuth tokens like Mastodon](https://docs.joinmastodon.org/api/oauth-scopes/), as well as give access providers the ability to halt access to a compromised app, would do wonders in terms of reducing blast radius when a vulnerability is found in the wild. [According to Bluesky protocol engineer Bryan Newbold](https://bsky.app/profile/bnewbold.net/post/3khrytwjig22n), this is actively in development.
2.  **2-Factor Authentication (2FA)  
    **I honestly can't overstate how important this is. Journalists are constantly the target of phishing attacks and 2FA is one of the few things that helps protect against those. It wouldn't even need to be a full implementation with SMS messages and everything, simply requiring users click an emailed link before logging in would still be a vast improvement.
    According to Newbold, this is currently being worked on but currently blocked by the OAuth work (see above [thread](https://bsky.app/profile/bnewbold.net/post/3khs275tosf2n)).
3.  **3rd-party labeller support**  
    One incredibly exciting feature that's in development is [the ability to create and use 3rd party "labellers"](https://github.com/bluesky-social/proposals/blob/main/0002-labeling-and-moderation-controls/README.md), which are services that add additional metadata to posts that users can then use to automatically show/warn/hide content. Currently, Bluesky employs a 1st-party [automated labeller](https://thehive.ai) that adds labels like "pornography" to images, enabling such content to be toggled via settings in the "Moderation" palette.
    3rd-party labellers thus hold the promise of ["composable moderation"](https://blueskyweb.xyz/blog/4-13-2023-moderation), whereby you can construct a social media experience that reflects your own moderation and safety needs. I suspect this will be key in [fighting disinformation this year](https://bsky.app/profile/bnewbold.net/post/3khyvh6szr62g), provided it rolls out in time (there are indications that could be [fairly soon](https://bsky.app/profile/bnewbold.net/post/3khrytwjig22n)). It probably wouldn't be particularly difficult to create an interface much like X's Community Notes functionality as a custom labeller, for instance.
4.  **Sharing API**  
    This is being tracked in [this GitHub issue](https://github.com/bluesky-social/social-app/issues/1540). The ability to share posts to Bluesky from 3rd party websites is something that I definitely find lacking as a developer in the journalism space. This is a pretty easy fix, I might try doing a pull request for it myself if I get bored (By the way! Bluesky is open source! _You can literally just do that._).**Edit:** I stand corrected, this _would_ be a fairly easy fix for a web-only thing but [apparently it's much more challenging in React Native](https://bsky.app/profile/mozzius.dev/post/3ki3he27knb2k).
5.  **Muted words**  
    Sometimes you just want to hide every single post that contains the word ["Alf"](https://faineg.substack.com/p/how-i-accidentally-ruined-bluesky). Muted words are important for preventative moderation, and this system should exist in addition to the labellers.
6.  **Private accounts**  
    This one is a biggy and the one that worries me the most at the moment. Being able to take your account private without outright deleting it has traditionally been an important anti-harassment tool; during dogpiles, it's often the only thing you can do short of removing the app from your phone. I've done it myself during some particularly stressful moments on Twitter, and I'm grateful I had the ability to do so. Alas, [most language I've read from the Bluesky team](https://blueskyweb.xyz/blog/5-19-2023-user-faq#:~:text=Why%20are%20my,anyone%20can%20view.) seems to indicate this either simply isn't a priority, or is even impossible given the design of the protocol. I hope to be proven wrong on this one.
7.  **A better logo for sharing buttons**  
    Just kidding! They [released a new logo](https://blueskyweb.xyz/blog/12-21-2023-butterfly) just the other week. I'm not a huge fan but I don't hate it either. I'm just grateful to see the end of that stock image they were using previously.

I'm sure I can think of a few more (this list assuredly does _not_ include GIFs or DMs; honestly I could care less about those) but this post is long enough already.

Happy 2024! May this be the year we finally begin [deshittifying](https://www.wired.com/story/tiktok-platforms-cory-doctorow/) the Internet.

\-æ.
