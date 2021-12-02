import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Simply git clone the repo
 *
 * TODO: Change to use forked version of git repo
 */
const downloadData = async () => {
  await execAsync('git clone https://github.com/Dimbreath/GenshinData data');
};

export default downloadData;
