# TDGDP - Teyvat Dev Genshin Data Parser

A extensible open source Genshin Data parser written in typescript.

## Getting Started / Requirements

- `node (v16)` - Needed to run the project and its cli
- `yarn` - Package managment to install developer requirements
- `git` - Required for downloading init data from Genshin Data

```bash
# Setup CLI
yarn ts-node cli.ts init

# Parse a entity
yarn ts-node cli.ts parse <entity>

# General help
yarn ts-node cli.ts --help
```

## Documentation

TBA

## Use as a lib (for extending)

This project can be used as a library however for now is not offically supported though a package manager. Run `yarn tsc` will build the dist folder which then you can `yarn link` this folder.

## Contributing

You are welcome to contribute to this project and I encourage you to!

The code is heavily commented to help with understanding the content and hopefully making it easier to contribute

You may need the following programs setup in your dev environment for the best experience.

- [dprint](https://dprint.dev/) - Used for formatting (faster prettier)

## Disclaimers

Most of the data is sourced by [Genshin Data](https://github.com/Dimbreath/GenshinData)

I work on this project in my free time, it may or may not be kept up to date or have the features you desire at the time of your viewing and use of the project, you are welcome to contribute to the project or raise an issue to keep track of highly requested features.
