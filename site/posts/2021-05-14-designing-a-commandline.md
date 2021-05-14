---
title: >
 Designing a command line interface
date: '14th May 2021'
slug: 'designing-a-command-line-interface'
imageFilename: 'fan.jpg'
imageCaption: 'Convey intent with few words'
excerpt: >
  Designing a command line interface can be tricky. You want the commands to be easy to understand, but not too verbose. You need to be consistent with your context.
  Here are some of my thoughts on good command line interface design.
---
Designing a command line interface can be tricky. By 'design', I'm thinking of things like usability, consistency, and the like - not the actual function of the application.

I see a number of challenges in designing a CLI. You want the commands to be easy to understand, but not too verbose. You need to be consistent with your context - for instance, [PowerShell has a list of 'approved verbs' for commands](https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands?view=powershell-7.1).

It's also hard to communicate an overall sense of the design. Whereas a graphical application can be built from a set of high-fidelity mockups (or napkin sketches), a command line application doesn't lend itself to being represented in such an simple manner.

So how do you design for a command line? In this post I'm going to share some of my thoughts on the matter.

# Use consistent patterns

Consistency is important in all aspects of design. Consistent design makes it easier for users to remember commands, and easier to figure out what an unfamiliar command might do.

For instance, here are some command line arguments for [`git`](https://git-scm.com/docs/git#Documentation/git.txt---exec-pathltpathgt):
- `--html-path`
- `--man-path`
- `--info-path`

There's a nice naming pattern here - `something` *dash* `path`. With consistent terminology and naming pattern, these options naturally form a group.

So, given what `html-path` does:

```
Prints the path, without trailing slash, where Git's HTML documentation is installed and exit.
```

You can rightly guess that `man-path`, and `info-path`, do a similar thing.

# Flags can be powerful

Flags are a common pattern in command line design to present an on/off choice to users. [Let's look at the `dotnet` command line for examples.](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-pack)

There are many arguments that can be configured:

```
--output <OUTPUT_DIRECTORY>
--runtime <RUNTIME_IDENTIFIER>
--verbosity <LEVEL>
```

...and so on.

And many arguments (flags) that change behavior just by being present:

```
--no-restore
--no-build
--include-source
```

...you get the idea.

Flags are a great way of providing on/off configuration to users, since they are more terse.

For instance, writing `--no-restore` is easier on the eyes than `restore=false` or `restore=on`.

Let's look at a longer command:

`dotnet pack --force --include-source --include-symbols --no-dependencies`

Against something like:

`dotnet pack --force=true --include-source=true --include-symbols=true --dependencies=false`

I certainly think the latter is tricker to parse.

## Opinionated flags

Command line flags provide an opportunity to be more descriptive about the behavior of your application. In fact, they're so descriptive they can also be just a tiny bit opinionated.

Let's say I'm building a command line app to make my morning coffee. A pure configuration approach might look like this:

`barista --drink=coffee --milk=true --espresso-shots=2 --sugar=false`

Now that's a lot of configuration for a basic use case. Let's try a flag based approach:

`barista --create-coffee --milk --double-shot --no-sugar`

So I've just substituted everything for flags. However, I've been a bit sly in the way I've gone about it:

- `--milk` Just a straightforward on/off option
- `--double-shot` I've removed the option to set the number of shots. The existence of this flag sort of implies a single shot is the default.
- `--no-sugar` By prefixing with `no-`, I've kind of implied that having sugar is the default.

Now you may agree or disagree with the opinions expressed in these flags (sugar in coffee! Are you *crazy?*). You might even be passionate about your position.

Not convinced? Let's try a crazier example:

`barista --create-coffee --no-goats-milk --caffeinated`

Even though it's a perfectly valid configuration - I want caffeinated coffee *without goats milk* - the fact these flags exist sort of tell you something about the way the app was intended to be used.

So with this silly example, I hope you can see there's a subtle power in the flags you offer to your users.

If someone's new to your application (or coffee), this can be a subtle way of signalling something about how your app is meant to be used.

## Closing thoughts

So those are a few of my thoughts on designing command line applications. Command line applications are, in essence, all about words. So it's important to pick the right ones that convey what you mean, and how you intend your application to be used. You're trying to strike a balance between verbosity, and readability.

There's a huge amount to write on the topic, and I might do something more in-depth later.