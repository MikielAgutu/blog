---
title: >
 Free & open source isn't always free & open
date: '23rd March 2021'
slug: 'free-and-open-source-isnt-always-free-and-open'
imageFilename: 'sea-2.jpg'
imageCaption: 'Not quite this free and open'
excerpt: >
 It turns out that 'open source' has a broader meaning than you might think.
 In this post I'd like to share some of what I've learned about the open source world in the past few years.
---
In 2019, Redgate acquired Flyway, a popular open source tool for database migrations.

A new engineering team was formed to on-board Flyway into the business, and I was asked to join. Our brief was simple - just get to grips with the codebase.

We suddenly had thousands of new users to look after. Our code was open to public scrutiny, and we had to learn how to keep everyone happy.

Fast forward a couple of years, and I'm glad to say we're much more comfortable running an open source project.

In this post I'd like to share some of what I've learned about the open source world since then.

## Open source doesn't mean what you think

It turns out that 'open source' is a really broad term, though on the surface it seems obvious. Open source just means that the source code is on a public GitHub repo somewhere, right?

Well, it's not so simple. A naive Google search for 'define open source software' yields definitions from various places. Here are some I found:

*'The term open source refers to something people can modify and share'* ([opensource.com](https://opensource.com/resources/what-open-source))

*'Source code is released under a license... grants users the rights to use, study, change, and distribute the software to anyone and for any purpose.'*  ([wikipedia](https://en.wikipedia.org/wiki/Open-source_software))

*'open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit.'* ([Red Hat](https://www.redhat.com/en/topics/open-source/what-is-open-source))

Ok, so there are some common themes. 'something people can share', 'publicly accessible' a license to 'study' or 'use the software'.

However, in practice, crack open a popular open source project like, say, [iText 7](https://github.com/itext/itext7-dotnet), and see what they say about your liberty to use, modify, and re-distribute their code at will:

[`iText7-dotnet Readme.md`](https://github.com/itext/itext7-dotnet#readme)
```
iText 7 is dual licensed as AGPL/Commercial software.
AGPL is a free / open source software license.
This doesn't mean the software is gratis!

Buying a license is mandatory as soon as you develop commercial
activities distributing the iText software inside your product...
```

It's free! It's open source! But don't make the mistake of thinking it's *actually* free!

## Open source projects vary in the freedoms they offer

So, iText, one of the biggest 'open source' vendors out there, still want you to pay for commercial usage of their software.

It turns out, if you look through the license conditions for open source projects you'll notice a pattern. Battle lines are generally drawn over the following:

- Commercial use
- Using the project in your own private (closed-source) projects
- Your ability to actually build the code from source yourself

For instance, [Elasticsearch made headlines earlier this year](https://aws.amazon.com/blogs/opensource/stepping-up-for-a-truly-open-source-elasticsearch/) for adjusting the terms of their license. The details are a bit beyond me, but apparently made it very difficult for existing users to operate their businesses.

[There are many examples of legal battles in the open source community](https://opensource.com/article/18/2/top-10-open-source-legal-stories-shook-2017), usually stemming from some worry about who's *really* going to get rich off a given project.

## Commercial open source is a thing

Despite it sounding like a paradox, commercial open source projects are quite common. [Flyway itself is a great](https://flywaydb.org/try-flyway-teams-edition) example. As much as I'd like to, I don't work on Flyway *solely* out of good will!

As you've seen, it's possible to profit from open source projects by using a license that requires you to pay for commercial deployments of that software.

There are other methods too. For instance, some projects take an 'Open Core' approach, where only a subset of the code is publicly available. Generally for 'Open Core', you'll have to pay to see all the code, and/or get all the features.

## Utopian visions of a free world

So it turns out that 'Free & open source' software isn't as free, or open as you might imagine. That said, there are many projects that live up to the ideal. In my experience they tend to be software libraries designed to 'scratch the itch' of other developers.

However, such grassroots solutions come with their own problems of their maintainers going AWOL ([who remembers left-pad?](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/)).

Ultimately, writing software is highly skilled and labor intensive. It's not unreasonable to expect some return for your hours spent. I think open source has it's place, but realistically the software world is always going to be a mix of free and commercial offerings.