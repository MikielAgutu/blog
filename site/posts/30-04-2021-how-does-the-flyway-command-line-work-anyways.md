---
title: 'How does the Flyway command line work, anyways?'
date: '30th April 2021'
slug: 'how-does-the-flyway-command-line-work-anyways'
imageFilename: 'box.jpg'
imageCaption: 'A cool box'
excerpt: >
 The Flyway command line is a bit like magic. Just download it, and it runs across Windows, Mac, and Linux - even without an installer.
 Let's look more closely at how it works.
---
The Flyway command line is a bit like magic. Just download it, and it runs across Windows, Mac, and Linux - even without an installer.

In this post I'll explain some of the technical details that make it all work.

## Things I like about the Flyway command line

In my opinion, the Flyway command line does some pretty cool stuff:

- It's a self-contained zip archive, so you know where all the files live
- No installer or uninstaller
- You can run `flyway` in your terminal, and it just works

I think this setup is really versatile. The manual install/uninstall process might seem clunky to some. However, this setup means we can just offload that work to package managers like Homebrew or Chocolatey.

## Java isn't the whole story

You might know that Flyway is written in Java. Since Java apps can be run cross platform, perhaps it seems obvious that Flyway can just be deployed on any mainstream operating system?

In the grand scheme, it's true. Using Java gives Flyway it's cross platform capability. However, Flyway does some clever things beyond what a normal Java build process might offer.

## What's in the zip?

Let's have a look at the [Flyway command line](https://flywaydb.org/documentation/usage/commandline/#download-and-installation) archive.

There's a bunch of folders, `conf`, `drivers`, `lib`, and so on. Let's ignore those for now. The interesting part is the `flyway` and `flyway.cmd` files.

When you run `flyway` on the command line, it's one of these two files that are actually executed, depending on your operating system. `flyway` is for Linux and MacOS, whereas `flyway.cmd` is for Windows.

I'm a Windows guy, so let's open up `flyway.cmd` in a text editor.

## The batch script

`flyway.cmd` is a batch script file that sets up a lot of variables, then calls the Java executable. Skip to the end to find the line that looks like this:

```cmd
%JAVA_CMD% -Djava.library.path="%INSTALLDIR%\native" %JAVA_ARGS% 
 -cp "%CLASSPATH%;%INSTALLDIR%\lib\*;%INSTALLDIR%\lib\%FLYWAY_EDITION%\*;%INSTALLDIR%\drivers\*"
 org.flywaydb.commandline.Main %*
```

There's a lot going on here, right? Let's break it down.

First, let's figure out what `%JAVA_CMD%` is. This is a variable, and scrolling up the file you can see how it's defined:

```cmd
@REM Set the current directory to the installation directory
call :getCurrentBatch INSTALLDIR1
set INSTALLDIR=%INSTALLDIR1%
set INSTALLDIR=%INSTALLDIR:~0,-10%

if exist "%INSTALLDIR%\jre\bin\java.exe" (
 set JAVA_CMD="%INSTALLDIR%\jre\bin\java.exe"
) else (
 @REM Use JAVA_HOME if it is set
 if "%JAVA_HOME%"=="" (
  set JAVA_CMD=java
 ) else (
  set JAVA_CMD="%JAVA_HOME%\bin\java.exe"
 )
)
```

The comments are helpful here. We set `%JAVA_CMD%` to this location - `"%INSTALLDIR%\jre\bin\java.exe"`. If that isn't found, then we use `JAVA_HOME`, which is an environment variable set by Java when you install it.

So what is `"%INSTALLDIR%\jre\bin\java.exe"`? Look again at the Flyway installation zip. There's a folder called `jre`, and within that `bin`. Open that up, and you'll see hundreds of Java specific files.

So, Flyway actually bundles the Java Runtime Environment (JRE), if you don't already have it installed.

Flyway brings it's platform with it, so it doesn't need any other installation. I think this is a really elegant approach.

## Java magic

So, `%JAVA_CMD%` gets set to a path that can call a Java executable. The next step is to set up the Java Virtual Machine (JVM) to load in all the Flyway specific dependencies (JARs).

Java looks for dependencies on something called the 'classpath'. My understanding is, the classpath is just a list of folders on your machine where Java will load in JARs. Flyway sets up the classpath with the `-cp` argument. It sets:

`"%INSTALLDIR%\lib\*`, `%INSTALLDIR%\lib\%FLYWAY_EDITION%\*`, and `%INSTALLDIR%\drivers\*"`

Ah, `lib`, that's familiar, right? Open it up in the zip archive and you see the following:

```
community/
enterprise/
gson-*.jar
jansi-*.jar
```

So, we add `gson` and `jansi` to the classpath. Then we add everything in the `community` or `enterprise` folder, depending on which edition of Flyway the user has selected. Open up `community` or `enterprise`, and you'll see the JARs for Flyway itself.

Flyway also sets this thing called `java.library.path` to the `native` folder. This is a JVM property, used to configure the JVM's behavior. In this case we're telling Java, 'hey, look in this `native` folder for some stuff'. For Flyway, this is needed to add some DLLs for Windows Authentication in SQL Server connections.

Finally, we tell the JVM where to start executing code, [`org.flywaydb.commandline.Main`](https://github.com/flyway/flyway/blob/master/flyway-commandline/src/main/java/org/flywaydb/commandline/Main.java).

## Put all your toys in the box

So, now you've seen a bit more about how the Flyway command line manages to work 'out-of-the-box'. I've glossed over some things, but perhaps you aren't desperate to know much more? :)

In summary, Flyway bundles everything it needs to run in a self-contained way.

I personally really like this approach, however there are some pitfalls. You may have noticed that Flyway is bundling some things only a few users will care about. For instance the DLLs to support Windows authentication. Does every user need it? Probably not!

So Flyway runs the risk of being a bit bloated, in order to provide a nice setup experience for all it's users. I think this is an acceptable risk, really. Maybe some people are really concerned about shaving MBs off the size of their artifacts, but I doubt most people notice.