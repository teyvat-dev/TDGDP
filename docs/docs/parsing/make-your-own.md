---
sidebar_position: 3 
---

# Make Your Own Parser

The following documentation consists of a in-depth look on how to structure and develop your own parsers based on the weapons parser.

### Structure

The structure of a parser consists of the **root entity** as the folder base with a parse file as the entrypoint of the parser.

eg. `<root>/src/parsers/<entity>/parse.ts`

The parser is usually accompanied by a enums file to define often used enums by the parser. This is subject to change depending on feedback.

All sub functions are to put into the utils folder under the parser entity folder.

### What a parser should do

A parser should deal with three major things.

1. Prepare and load the data necissary for parsing (though the DataIndex)
2. Parse the data loaded into a more readable and useable form
3. Return all the parsed data as an object

### Creating the parse file

To get started create a new folder with the entity name you want to make the parser for and then create a new file named parse.ts inside eg. `<root>/src/parsers/weapon/parse.ts`

Inside this file the following boilerplate should be used.

:::tip Dont worry

We will explain what the getYourEntityDataIndex() next
:::

```ts
import type { Config } from '../../global/types/config';

import getYourEntityDataIndex from './utils/getYourEntityDataIndex';

/**
 * The entrypoint parser for <your entity>.
 *
 * @param config Config object
 * @returns the parsed entity data
 */
const parse = async (config: Config) => {
  const yourEntityDataIndex = await getYourEntityDataIndex();

  // Data Processing here

  return dataYouProcessed;
};

export default parse;
```

### Creating the Data Index getter

This file is the crutial for loading in the required raw data from GenshinData (or elsewhere) that is used to produce your final parsed data result. It uses dynamic imports to save on memory~

This file should be created under the **utils** directory under the parser folder eg. `<root>/src/parsers/<entity>/utils/getYourEntityDataIndex.ts`

```ts
/**
 * Dynamically imports and exports the your entity data.
 */
const getYourEntityDataIndex = async () => ({
  weaponConfigs:
    (await import('../../../../data/ExcelBinOutput/WeaponExcelConfigData.json'))
      .default, // Just an example
  // Your data
});

export default getYourEnityDataIndex;
```

### Start parsing!

Once you have the entity named and the data required loaded its time for you to start parsing the data. This is completely up to your discression on how this is done however there are some tips that should be followed when developing a new parser.

- If you require a helper funcitons, always extract it into the utils folder to keep the parse file small
- Lots of id's in the data link to eachother, so its best to make a map of what id is what while developing your parser
- Feel free to ask questions on the Discord if you get stuck
- Here is an [example](/docs/parsing/custom-example) of a custom parser that is not used in production, but produces data with a list of all weapons names

:::tip Remeber
To test your new parser at any time you can call it using

`yarn ts-node cli.ts parse your-entity`
:::
