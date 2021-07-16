---
title: >
 Why write a line of code?
date: '16th July 2021'
slug: 'why-write-a-line-of-code'
imageFilename: 'forest.jpg'
imageCaption: 'The answer is less compelling than you think'
excerpt: >
  I've recently spent some time thinking more deeply about how engineering teams plan and execute work.
  In my head I've broken it down from first principles, then built it up again.
  Ultimately it's about figuring out why you even need to come in to work each day.

---
I become a technical lead about a year and a half ago. At Redgate, this involves line management, along with writing code (if one can find the time).

When I first got the role, I was given total freedom over how my team should operate. So, my first thought was to establish a simple working pattern.

We were a new team of only a few engineers, so we didn't have any processes to fall back on. I set about getting us working in two week sprints, based on what I'd seen other teams do.

Sprints are a very common way of organizing technical work. Get the team together, and review the high level stories. Break them down into sub tasks, estimate how long they'll take, and then create some kind of prioritized backlog. Chop through the backlog over the next two weeks, and then maybe have a retrospective. Rinse, repeat, ad infinitum.

This made sense as I was finding my feet as a team lead. However, I've recently spent some time thinking more deeply about this whole cycle. In my head I've broken it down from first principles, then built it up again.

Doing this has led me to some insights that I think are worth sharing. In this post, I'll explain my current thoughts on the matter.

## What Are We Even Doing Here?

First, I wanted to identify a strong reason for the team to even come into the office (virtual or otherwise). This might sound philosophical - and it is. Why even write a line of code?

Well the short answer could be 'my boss wants me to'. However, as a team lead, I sort of *am* that boss (as scary as that thought is). However, having been promoted from engineer to manager, I didn't suddenly receive a revelation about that mysterious 'why'. I certainly didn't get some sudden motivation to boss people about.

Engineers, myself included, are good at coming up with 'whys' on their own. I like learning new things. I like solving problems. I like to learn about new technologies.

Noble, but it's obvious that these aren't good business reasons to write code. Companies don't exist to fulfil our desire to solve problems, sadly.

Sometimes we come up with 'whys' that sound business-like, but still miss the mark. We need to unblock these users by fixing their bugs. We need to improve the UX of this interface. We've need to pay off this tech debt so we can move faster.

More noble lies, unfortunately. Again, companies don't exist so we can pay off tech debt.

I think the ultimate answer is simple, yet disappointing. I think I've realized that the only reason you need to write code in a commercial organization is to ensure the company makes a profit.

## A Chilling Conclusion

It's a disappointing conclusion to be sure. It doesn't mean those noble ideals of writing clean, maintainable software that solves hard problems are any less valuable. However, it does mean all those ideals must be bent in service of ensuring your organization makes a profit year on year.

Yet it's a big jump to make. How does my pull request really impact the company's bottom line? And really, such concepts are so far beyond us engineers. Isn't this question for the lofty heights of upper management?

Well, individual engineers can get away without knowing how their work impacts the company's commercials. However, the team lead *does* need to have an understanding of that relationship. How can I justify spending a week of my team's time on *anything* if I don't understand what the business impact might be?

So my second insight was around connecting the dots from my company's bottom line, down to day-to-day actions of an engineer on my team. I realized my role was to somehow translate what was going on up in the mystical land of executives and senior leaders, to the every day engineer just fixing up her pull request for the afternoon.

The key to that, in my opinion, is all about setting crystal clear *Strategic Objectives*.

## Strategic Objectives

A Strategic Objective is a description of a goal that will have a positive impact on the business. That impact ought to be somehow correlated with making a profit for the company. They must be ambitious, but not impossible. Specific, but not prescriptive. Long term, but not pie-in-the-sky.

You need to look at the world - market, your users, technologies, trends, and everything else - and come up with an objective that is crystal clear, actionable, joined up with reality, and will have the business impact (profit, usually) that you desire.

For instance, I might look at the numbers of the software product my team owns. Well, we have X hundred customers. I can see there's a trend in the market that we're well placed to capitalize on by building new features that support people who are following that trend.

So we might have Strategic Objective: 'Win more customers by delivering new features that exploit trend Y'.

It's obvious how hitting that objective might translate into more profit for the company. We invest a few months of engineering time to, hopefully, get new customers who repay that investment and then some - providing a return on investment.

Of course, coming up with such Strategic Objectives is hard. That's why you have senior strategists like CTOs and architects, who come up with top level objectives that should inform your own. You need product managers, who can evaluate the commercial potential of a given approach. You need marketing people to help draw those new customers in. And on it goes.

Of course it's easy to get this wrong, which will result in disaster. There are many methodologies employed to reduce this risk - Objectives and Key Results (OKRs). Key Performance Indicators (KPIs). SMART goals. Objectives, goals, strategies and measures (OGSM). And so on.

This is tough as nails. It's why there are endless books, courses, and university courses about business and strategy. Ultimately, you need some way to formulate an expression of a task that, if successful, will impact the business in a positive way - directly or indirectly resulting in cash profit.

## Sprint Planning

It's one thing coming up with Strategic Objectives - then quite another to actually execute on them.

So let us return to sprint planning. I realized that all I need to do is get one or more carefully formulated Strategic Objectives in front of the team from week to week. From there, we have a way of finding the intersection between the things we *could* do, and the things we *should* do.

Yet this is also extremely hard. Give a team an objective like this, and see what happens:

'Increase trial license requests by X % this quarter'

I'm not being sarcastic, actually. Some teams might be really well equipped to smash this objective. Others might have no idea, and revert to primal behaviors of fixing bugs and debating which component to refactor next.

So my last revelation was that really, it's up to the team lead to ensure Strategic Objectives are translated into actionable technical tasks.

No, updating our dependencies has no strategic relevance. It might be clean code, but it's pointless.

Yes, writing a blog post that we can circulate *might* have strategic relevance. Are you comfortable doing that? Perhaps we can catch up about it after planning?

From there it's a case of continually joining up the dots. Bring the team along in defining Strategic Objectives. Have open discussions about the *why*, not just the *what*. Coach, mentor, and train your team to execute on strategically relevant tasks, not just the tasks they think are cool and interesting. Help your team to really understand why they've been summoned to work each day.

## Closing thoughts

So this is my mental model of how figure out what an engineering team should actually do. Getting each step right is probably a lifetime of learning. However I'm willing to take it one day at a time.