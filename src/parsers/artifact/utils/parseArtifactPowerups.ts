import calculatePercentageFromWeights from './calculatePercentageFromWeights';
import formatPropValue from './formatPropValue';

type ReliquaryPowerups = typeof import('../../../../data/ExcelBinOutput/ReliquaryPowerupExcelConfigData.json');

/**
 * Helper to parse the chances for a x2 or x5 powerup when leveling up a artifact.
 *
 * @param powerups powerup data
 * @returns powerup chances
 */
const parseArtifactPowerups = (powerups: ReliquaryPowerups) => {
  const chances = calculatePercentageFromWeights(
    // powerups.map(({ PowerupWeight }) => PowerupWeight), // 2.5 removed this from the data so patching
    [0.9, 0.09, 0.01],
  );

  return powerups.map(({ PowerupMultiple }, index) => ({
    multiple: PowerupMultiple,
    chance: chances[index],
    chanceFormat: formatPropValue(chances[index], 'percent'),
  }));
};

export default parseArtifactPowerups;
