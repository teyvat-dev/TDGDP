import { existsSync } from 'fs';

import checkUpdate from './utils/checkUpdate';
import downloadData from './utils/downloadData';

/**
 * Initialization script to ensure the required data is download and available
 */
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
