/**
 * @title TDGDP
 * @description Parse Genshin Data Opinionativly
 * @author Drew Hutton <Yoroshi>
 * @contributors []
 *
 * When modifying or redistributing this project, do not modify this notice.
 * Don't forget to add your name to the contributors list above.
 */

/**
 * Enum for the different types of data to parse
 */
export enum ParseType {
  All,
  Artifacts,
  Weapons,
}

/**
 * @description Parse the arguments passed to the program
 * @return {ParseType} The type of data to parse
 * TODO: remove if chain
 */
const argMatching = (): ParseType[] => {
  const parseTypes: ParseType[] = [];

  if (process.argv.includes('--artifacts')) {
    parseTypes.push(ParseType.Artifacts);
  }
  if (process.argv.includes('--weapons')) {
    parseTypes.push(ParseType.Weapons);
  }
  if (parseTypes.length === 0) {
    parseTypes.push(ParseType.All);
  }

  return parseTypes;
};

export default argMatching;
