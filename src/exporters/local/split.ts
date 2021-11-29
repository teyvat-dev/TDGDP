import { open } from 'fs/promises';
import ensureDir from '../../global/helpers/ensureDirs';

// TODO: Add customise options for things like pretty printing, etc.

/**
 * Writes the raw data to a file.
 *
 * @param data Data to write.
 * @param folder Folder where to write the data items.
 */
const split = async (data: any[], folder: string) => {
  if (data) {
    await ensureDir(folder);
    for (let item of data) {
      const fileName = `${folder}/${item.id}.json`;
      const file = await open(fileName, 'w');
      await file.writeFile(JSON.stringify(item, null, 0));
      await file.close();
    }
  }
};

export default split;
