---
slug: intro-tdgdp
title: Introducing TDGDP - What is it?
authors:
  name: Drew Hutton <Yoroshikun>
  title: The Developer
  url: https://github.com/yoroshikun
  image_url: https://avatars.githubusercontent.com/u/1892447?v=4
tags: [teyvat-dev, parsing, open-source]
---

Hello everyone, this is my first blog post so I won't be very good at it however let's give it a shot.

If you are reading this you will at least have some interest in both the game Genshin Impact and the development world of making tools to interact with this game. However, as you may have realised that sourcing the data necessary for your great new project can be hard to come by or is presented in ways that is hard to use. This project **TDGDP** aims to fix that.

### What's is this weird TDGDP anagram?

TDGDP stands for Teyvat Dev Genshin Data Parser, I have very little creativity so the name is very literal. **Teyvat Dev** if you did not know is a project that aims to make this data accessible (plus a little bit more) as an API. I have worked on and off on [teyvat.dev](https://teyvat.dev/) for the better part of a year however due to school and social commitments the project has been unable to fully take off, often falling into a cycle of, I have time I should build it up with my current knowledge -> ok it's at a point where it's stable for a few people to use -> getting distracted -> oh I might want to rebuild parts of the API in a better way. This lead to a consistent "beta" state.

If you are wondering, yes [teyvat.dev](https://teyvat.dev/) is still alive and contains data jointly from wiki and early builds of this parser, feel free to contact me on [Discord](https://discord.gg/SYzYaQXurR) to test it out! But this post is not about that so let's move on.

### If we have Teyvat Dev then why do we need TDGDP?

Well, the issue is with my time as a solo developer. If I were a 100x developer there would not be much need for a community project, however, this is not the only case. I over the last year have been exposed to the positive community of open source projects and would like to start open-sourcing some of my projects so that we all can benefit, it is no use if I have a project sitting on my hard drive somewhere collecting dust!

Secondly, Genshin Impact just has way too much data to sift through, the more hands-on the project the more we can accomplish as a community, every new feature and item parsed directly benefits everyone involved.

### Why Typescript? (Javascript)

- I'll get the selfish reason out of the way first, It's what I'm most proficient in.
- Javascript/Typescript has first-class support for working with .json (JavaScript Object Notation) files which makes it easy to parse raw data without needing extra typing files for intellisense
- It's one of the most commonly used programming languages
- Node is pretty fast, parsing every weapon in the game takes less than 5 seconds on most machines.

### What now?

If you are interested in the project, by all means, go and check out the [Github Repo](https://github.com/teyvat-dev/TDGDP/) and start contributing what you can, raise issues for bugs/feature requests, make pull requests to fix my programming or add new features, every line is appreciated.

:::tip Also
If you are only interested in using the project not contributing, you can start by checking out the setup page [Here](/docs/intro)

:::

I will be posting blogs here on progress and interesting findings that have been discovered through the parsing effort (you learn a lot when sifting the data line by line)
