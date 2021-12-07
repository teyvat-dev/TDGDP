---
sidebar_position: 4
---

# Custom parser example

Here you will find an example of a working custom parser that returns the names of all the weapons currently available in genshin impacts database

### Required files

```
src/parsers/weapon-name/parse.ts
src/parsers/weapon-name/utils/getWeaponNameDataIndex.ts
```

### The Data Index file

The data require to find and list all the names of the files is easy to find and utilise as there is no need to find connections to many other data files in the GenshinData Data Dump. The file we need is
`<root>/data/ExcelBinOutput/WeaponExcelConfigData.json` as this file has a list of all weapons and the properies of `NameTextMapHash` which we will be using later in the parse file to get name of the weapons.

```ts
/**
 * Dynamically imports and exports the weapon name data.
 */
const getWeaponNameDataIndex = async () => ({
  weaponConfigs:
    (await import('../../../../data/ExcelBinOutput/WeaponExcelConfigData.json'))
      .default,
});

export default getWeaponNameDataIndex;
```

### The Parse file

The parse file is where the logic of the parser happens, we want this parser to find all the names of every weapon. We know that the weaponConfigs data is a list of weaponConfigs and each config has a property we can use to find the name of the weapon so here is how we will accomplish it.

```ts
import type { Config } from '../../global/types/config'; // Import type for config

import getTextMapHash from '../../global/helpers/getTextMapHash'; // Import helper for text map hashes

import getWeaponNameDataIndex from './utils/getWeaponNameDataIndex'; // Import data index getter

/**
 * The entrypoint parser for weapon name.
 *
 * @param config Config object
 * @returns the parsed weapon name data
 */
const parse = async (config: Config) => {
  // Initialise the data index
  const weaponNameDataIndex = await getWeaponNameDataIndex();
  // Temporary variable for holding the parsed weapon names
  const weaponNames = [];

  // A loop over each weapon in the weaponConfigs
  for (const weapon of weaponDataIndex.weaponConfigs) {
    const name = getTextMapHash(weapon.NameTextMapHash); // Get the name of the weapon using the hash map helper

    weaponNames.push(name); // Push resolved name into the temporary array
  }

  return weaponNames; // Return the weaponNames array with all the parsed weapon names
};

export default parse;
```

### Conclusion

And thats that! You have successfully made a bare bones parser for tdgdp :) You can test it by running

```shell
yarn ts-node cli.ts parse weapon-name
```

This should produce a file in the parsed output folder with the newly parsed data.
