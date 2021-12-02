import { open } from 'fs/promises';

import ensureDir from '../../global/helpers/ensureDirs';

// TODO: Add customise options for things like pretty printing, etc.

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
