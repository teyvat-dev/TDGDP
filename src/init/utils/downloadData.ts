import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const downloadData = async () => {
  await execAsync('git clone https://github.com/Dimbreath/GenshinData data');
};

export default downloadData;
