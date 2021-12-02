import { PropType, PropTypeClean } from '../../../global/types/enums';
import calculatePercentageFromWeights from './calculatePercentageFromWeights';
import formatPropValue from './formatPropValue';

type ReliquaryMainProps = typeof import('../../../../data/ExcelBinOutput/ReliquaryMainPropExcelConfigData.json');
type ReliquaryAffixs = typeof import('../../../../data/ExcelBinOutput/ReliquaryAffixExcelConfigData.json');

/**
 * Parse and get the possible stats of an artifact
 *
 * @param mainProps mainprop data
 * @param affixs affix data
 * @returns possible stats and substats for each artifact type
 */
const parseArtifactStatPossibilities = (mainProps: ReliquaryMainProps, affixs: ReliquaryAffixs) => {
  const artifactTypesAndMainDepotId = [
    { type: 'SandsOfEon', depotId: 1000 },
    { type: 'PlumeOfDeath', depotId: 2000 },
    { type: 'CircletOfLogos', depotId: 3000 },
    { type: 'FlowerOfLife', depotId: 4000 },
    { type: 'GobletOfEnotherm', depotId: 5000 },
  ]; // Warning Hardcode

  const mainStatChances = artifactTypesAndMainDepotId.map(({ depotId }) =>
    calculatePercentageFromWeights(
      mainProps
        .filter(({ PropDepotId }) => PropDepotId === depotId)
        .map(({ Weight }) => Weight || 0),
    )
  );

  const possibleMainStatsBase = artifactTypesAndMainDepotId.map(
    ({ depotId, type }, artifactTypeIndex) => ({
      artifactType: type,
      chances: mainProps
        .filter(({ PropDepotId }) => PropDepotId === depotId)
        .map(({ PropType }, index) => ({
          statType: PropTypeClean[PropType as PropType],
          chance: mainStatChances[artifactTypeIndex][index],
          chanceFormat: formatPropValue(
            mainStatChances[artifactTypeIndex][index],
            'percent',
          ),
        })),
    }),
  );

  const possibleMainStats: {
    artifactType: string;
    statType: string;
    chance?: number;
    chanceFormat?: string;
  }[] = [];

  possibleMainStatsBase.forEach(({ artifactType, chances }) => {
    chances.forEach((mainStat) => {
      const prevIndex = possibleMainStats.findIndex(
        (item) =>
          item.statType === mainStat.statType
          && item.artifactType === artifactType,
      );

      if (prevIndex !== -1) {
        // Check for my sanity
        if (possibleSubStats[prevIndex].chance !== mainStat.chance) {
          console.log('chances do not match');
        }

        possibleMainStats[prevIndex] = {
          artifactType: possibleMainStats[prevIndex].artifactType,
          statType: possibleMainStats[prevIndex].statType,
          chance: possibleMainStats[prevIndex].chance,
          chanceFormat: possibleMainStats[prevIndex].chanceFormat,
        };
      } else {
        possibleMainStats.push({
          artifactType,
          statType: mainStat.statType,
          chance: mainStat.chance,
          chanceFormat: mainStat.chanceFormat,
        });
      }
    });
  });

  // Start SubStats

  const artifactRarityAndSubDepotId = [
    { rarity: 1, depotId: 101 },
    { rarity: 2, depotId: 201 },
    { rarity: 3, depotId: 301 },
    { rarity: 4, depotId: 401 },
    { rarity: 5, depotId: 501 },
  ]; // Warning Hardcode

  const possibeSubStatChances = artifactRarityAndSubDepotId.map(({ depotId }) =>
    calculatePercentageFromWeights(
      affixs
        .filter(({ DepotId }) => DepotId === depotId)
        .map(({ Weight }) => Weight || 0),
    )
  );

  const possibeSubStatUpgradeChances = artifactRarityAndSubDepotId.map(
    ({ depotId }) =>
      calculatePercentageFromWeights(
        affixs
          .filter(({ DepotId }) => DepotId === depotId)
          .map(({ UpgradeWeight }) => UpgradeWeight || 0),
      ),
  );

  const possibleSubStatsBase = artifactRarityAndSubDepotId.map(
    ({ depotId, rarity }, artifactRarityIndex) => ({
      rarity,
      chances: affixs
        .filter(({ DepotId }) => DepotId === depotId)
        .map(({ PropType, PropValue }, index) => ({
          statType: PropTypeClean[PropType as PropType],
          chance: possibeSubStatChances[artifactRarityIndex][index],
          chanceFormat: formatPropValue(
            possibeSubStatChances[artifactRarityIndex][index],
            'percent',
          ),
          propValue: PropValue,
          propValueFormat: formatPropValue(
            PropValue,
            PropTypeClean[PropType as PropType].includes(
                'Percent',
              )
              ? 'gamepercent'
              : 'flat',
          ),
          upgradeChance: possibeSubStatUpgradeChances[artifactRarityIndex][index],
          upgradeChanceFormat: formatPropValue(
            possibeSubStatUpgradeChances[artifactRarityIndex][index],
            'percent',
          ),
        })),
    }),
  );

  const possibleSubStats: {
    rarity: number;
    statType: string;
    chance?: number;
    chanceFormat?: string;
    possibleValues: number[];
    possibleValuesFormat: string[];
    upgradeChance?: number;
    upgradeChanceFormat?: string;
  }[] = [];

  possibleSubStatsBase.forEach(({ rarity, chances }) => {
    chances.forEach((subStat) => {
      const prevIndex = possibleSubStats.findIndex(
        (item) => item.statType === subStat.statType && item.rarity === rarity,
      );

      if (prevIndex !== -1) {
        // Check for my sanity
        if (possibleSubStats[prevIndex].chance !== subStat.chance) {
          console.log('chances do not match');
        }
        if (
          possibleSubStats[prevIndex].upgradeChance !== subStat.upgradeChance
        ) {
          console.log('upgradeChances do not match');
        }

        possibleSubStats[prevIndex] = {
          rarity: possibleSubStats[prevIndex].rarity,
          statType: possibleSubStats[prevIndex].statType,
          chance: possibleSubStats[prevIndex].chance,
          chanceFormat: possibleSubStats[prevIndex].chanceFormat,
          possibleValues: [
            ...possibleSubStats[prevIndex].possibleValues,
            subStat.propValue,
          ],
          possibleValuesFormat: [
            ...possibleSubStats[prevIndex].possibleValuesFormat,
            subStat.propValueFormat,
          ],
          upgradeChance: possibleSubStats[prevIndex].upgradeChance,
          upgradeChanceFormat: possibleSubStats[prevIndex].upgradeChanceFormat,
        };
      } else {
        possibleSubStats.push({
          rarity,
          statType: subStat.statType,
          chance: subStat.chance,
          chanceFormat: subStat.chanceFormat,
          possibleValues: [subStat.propValue],
          possibleValuesFormat: [subStat.propValueFormat],
          upgradeChance: subStat.upgradeChance,
          upgradeChanceFormat: subStat.upgradeChanceFormat,
        });
      }
    });
  });

  return { possibleMainStats, possibleSubStats };
};

export default parseArtifactStatPossibilities;
