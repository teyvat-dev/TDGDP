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
    powerups.map(({ PowerupWeight }) => PowerupWeight),
  );

  return powerups.map(({ PowerupMultiple }, index) => ({
    multiple: PowerupMultiple,
    chance: chances[index],
    chanceFormat: formatPropValue(chances[index], 'percent'),
  }));
};

export default parseArtifactPowerups;
