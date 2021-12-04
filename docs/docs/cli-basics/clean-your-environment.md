---
sidebar_position: 2
---

# Clean your environment

Sometimes things get messy, or you want to start with a clean slate, the `clean` command is for this purpose.

#### Examples

Cleanup and delete the parsed ouput directory

```shell
yarn ts-node cli.ts clean parsed
```

Cleanup and delete the Genshin Data directory (You will need to run the `init` command again if you want to continue parsing)

```shell
yarn ts-node cli.ts clean data
```
