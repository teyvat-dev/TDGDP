---
sidebar_position: 1
---

# Parse an entity

Parsing an entity is the core of the cli experience.

### Examples

Parsing weapons with default settings

```shell
yarn ts-node cli.ts parse weapon
```

Parse weapons with custom output folder

```shell
yarn ts-node cli.ts parse weapon --config="{\"exportPath\":\"./out\"}"
```

### Default config

All parser calls start with the default configuration.

```js
{
  skipLocal: false, // For future use of "downloadless" mode
  language: "EN", // The language to be used when parsing options [CHS, CHT, DE, EN, ES, FR, ID, JP, KR, PT, RU, TH, VI]
  exportPath: './parsed' // The base export path (relative to where the cli is called),
  exportType: 'local/raw', // The export type, see (exporting/types) for more
};
```
