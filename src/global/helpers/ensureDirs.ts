import { existsSync, mkdirSync } from 'fs';

/**
 * Ensure that the given directory exists. and create it if it doesn't.
 *
 * @param dir the directory to check
 */
const ensureDir = (dir: string) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

export default ensureDir;
