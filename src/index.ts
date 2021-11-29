import { existsSync } from 'fs';
import { setCurrentLanguage } from './global/globals';
import { Config } from './global/types/config';

const index = async (config: Config) => {
  if (!config.skipLocal) {
    const downloaded = existsSync('./data');

    if (!downloaded) {
      throw new Error('No local data found. Run `init` first.');
    }
  }

  setCurrentLanguage(config.language);

  const parser = await import(`./parsers/${config.entity}/parse`);
  const exporter = await import(`./exporters/${config.exportType}`);

  const parsedData = await parser.default(config);
  await exporter.default(parsedData, `${config.exportPath}/${config.entity}`);
};

export default index;
