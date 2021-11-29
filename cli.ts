import { rmSync } from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import main from './src';
import type { Config } from './src/global/types/config';
import { EntityType, LANG } from './src/global/types/enums';
import init from './src/init/init';

yargs(hideBin(process.argv))
  .command('parse <entity> [options..]', 'parse the entity given', () => {}, (argv) => {
    const config: Config = {
      skipLocal: argv.skipLocal as boolean || false,
      entity: EntityType[argv.entity as EntityType],
      language: LANG.EN,
      exportPath: argv.exportPath as string || './parsed',
      exportType: argv.exportType as string || 'local/raw',
    };
    main(config);
  })
  .command('init [options..]', 'Initialise dev and local parser environment', () => {}, (argv) => {
    init();
  })
  .command('clean <type>', 'Cleans Up downloaded data or parsed data', () => {}, (argv) => {
    if (argv.type === 'parsed') {
      rmSync('./parsed', { recursive: true });
    }
    if (argv.type === 'data') {
      rmSync('./data', { recursive: true });
    }
  })
  .demandCommand(1)
  .help()
  .parse();
