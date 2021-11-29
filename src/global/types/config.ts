import type { EntityType, LANG } from './enums';

export interface Config {
  skipLocal: boolean;
  language: LANG;
  entity: EntityType;
  exportPath: string;
  exportType: string; // TODO enum
}
