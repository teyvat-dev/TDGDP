import { exec } from 'child_process';
import readline from 'readline';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Check for updates using git and offers to update if available
 */
const checkUpdate = async () => {
  try {
    await execAsync('git fetch', { cwd: './data' });

    const { stdout: divNum } = await execAsync('git rev-list HEAD...origin/master --count', { cwd: './data' });

    if (Number(divNum) !== 0) {
      const rl = readline.createInterface(process.stdin, process.stdout);
      rl.question('Update available: Do you want to update? [Y]/n: ', async (answer) => {
        if (answer.toLowerCase() === 'y') {
          await execAsync('git reset --hard origin/master', { cwd: './data' });
        }
      });
    }

    const { stdout: version } = await execAsync('git log -1 --pretty=%B', { cwd: './data' });

    console.info(`Current Data version: ${version}`);

    return;
  } catch (err) {
    console.error(err);
    return;
  }
};

export default checkUpdate;
