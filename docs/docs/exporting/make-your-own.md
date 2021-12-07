---
sidebar_position: 2 
---

# Make Your Own Exporter

An exporter is the final step in the TDGDP pipeline, here the data provided from a parser can be manipulated and "exported" in the way that you want. As this is still early days, exporters and custom-exporters are experiemental. Only the base `local/raw` exporter currently works with every parser, as it does not manipulate the received data in any way and writes a `.json` file locally.

:::tip Requested Exporters
Exporters that would be nice but have not been created yet are connectors to services like s3, prisma, google cloud storage, google drive etc.
:::

### Structure

All exporters should follow a similar structure to proposed

```
<root>/src/exporters/<type>/<subtype>.ts
<root>/src/exporters/<type>/utils
```

This strucutre should provide enough headroom for any kind of complex exporter logic

### What an exporter should do

An exporter should be able to do the following things

1. Take data as an object from the parsers return object
2. Ensure exporting with the desired exporter logic is possible before committing any I/O
3. Manipulate the data into compatiable data for the desired exporting method
4. Commit to exporting (Bonus points for implementing feedback for long running exports)

### Simple Exporter Example

As an example here is the raw data exporter, for now the path is determined outside this exporters scope.

```ts
import { open } from 'fs/promises';

import ensureDir from '../../global/helpers/ensureDirs';

/**
 * Writes the raw data to a file.
 *
 * @param data Data to write.
 * @param path Path where to write the data.
 */
const raw = async (data: any, path: string) => {
  if (data) {
    const fileName = `${path}.json`;
    await ensureDir(path.split('/').slice(0, -1).join('/'));
    const file = await open(fileName, 'w');
    await file.writeFile(JSON.stringify(data, null, 0));
    await file.close();
  }
};

export default raw;
```
