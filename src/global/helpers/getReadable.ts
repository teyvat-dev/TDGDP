import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { getCurrentLanguage } from '../globals';

const getReadbale = async (item: string): Promise<string | undefined> => {
  const language = getCurrentLanguage();

  if (existsSync(`../../data/Readable/${language}/${item}_${language}.txt`)) {
    return readFile(`../../data/Readable/${language}/${item}_${language}.txt`).then(data => data.toString());
  }

  return undefined;
};

export default getReadbale;
