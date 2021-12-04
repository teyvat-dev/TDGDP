---
sidebar_position: 1
---

# Intro

Let's get you started on how to use **TDGDP**.

## Getting Started

:::tip Hint

Remember that this is just how to use the program with the inbuilt cli option. If you want to use the project as a library so that you can extend it, please view the **use as lib** section
:::

First in order to use this project you must download it from **git** or [zip release](https://github.com/teyvat-dev/TDGDP/releases).

You are also assumed to have basic knowledge on using command line applications.

```shell
git clone https://github.com/teyvat-dev/TDGDP
cd tdgdp
```

> Please review the [REQUIREMENTS](https://github.com/teyvat-dev/TDGDP#getting-started--requirements) to ensure you have the correct dependencies installed for basic usage

## Initializing the data

The project has an automated initialization script that can be used to source the data from the **Genshin Data** repository

> As of right now this only downloads the latest commit and will always attempt to upgrade

```shell
yarn ts-node cli.ts init
```

## Ready to go!

Now that you have setup your environment and have the data required for parsing you can now move on to how to use the parser commands and configuration
