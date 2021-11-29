/**
 * @title TDGDP
 * @description Parse Genshin Data Opinionativly
 * @author Drew Hutton <Yoroshi>
 * @contributors []
 *
 * When modifying or redistributing this project, do not modify this notice.
 * Don't forget to add your name to the contributors list above.
 */

import { existsSync } from 'fs';
import checkUpdate from './utils/checkUpdate';
import downloadData from './utils/downloadData';

const init = async () => {
  const downloaded = existsSync('./data');
  const { default: ora } = await import('ora');

  if (!downloaded) {
    const downloadSpinner = ora('Downloading data..').start();
    await downloadData();
    downloadSpinner.succeed('Downloaded data');
  } else {
    const checkingSpinner = ora('Checking update..').start();
    await checkUpdate();
    checkingSpinner.succeed('Update check complete');
  }
};

export default init;
