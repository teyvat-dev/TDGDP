import { existsSync, mkdirSync } from 'fs';

const ensureDir = (dir: string) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

export default ensureDir;
