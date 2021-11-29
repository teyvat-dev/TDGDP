import calculatePercentageFromWeights from './calculatePercentageFromWeights';
import formatPropValue from './formatPropValue';

type ReliquaryPowerups = typeof import('../../../../data/ExcelBinOutput/ReliquaryPowerupExcelConfigData.json');

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
