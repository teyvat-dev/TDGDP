import { PropType, PropTypeClean } from '../../../global/types/enums';
import formatPropValue from './formatPropValue';

const maxArtifactLevels = [4, 4, 12, 16, 20];

type ReliquaryLevels = typeof import('../../../../data/ExcelBinOutput/ReliquaryLevelExcelConfigData.json');

/**
 * Calculates the level curves for all artifact properties.
 *
 * @param levels levels data
 * @returns all level curves for all artifact properties (including exp)
 */
const calculateLevelCurves = (levels: ReliquaryLevels) => {
  const parsedLevels: {
    rank: number;
    levels: {
      level: number;
      exp: number;
      props: { PropType: string; Value: number }[];
    }[];
  }[] = [];

  levels.forEach((level) => {
    const prevIndex = parsedLevels.findIndex(
      (parsedLevel) => parsedLevel.rank === level.Rank,
    );

    if (prevIndex !== -1) {
      parsedLevels[prevIndex] = {
        rank: parsedLevels[prevIndex].rank,
        levels: [
          ...parsedLevels[prevIndex].levels,
          { level: level.Level, exp: level.Exp || 0, props: level.AddProps },
        ],
      };
    } else {
      parsedLevels.push({
        rank: level.Rank || 0,
        levels: [
          { level: level.Level, exp: level.Exp || 0, props: level.AddProps },
        ],
      });
    }
  });

  // Delete 0 rank
  parsedLevels.shift();

  // Slice to game only levels
  maxArtifactLevels.forEach((maxLevel, index) => {
    parsedLevels[index].levels = parsedLevels[index].levels.slice(0, maxLevel);
  });

  const exp = parsedLevels.map(({ rank, levels }) => ({
    statType: 'EXP',
    rarity: rank,
    levels: levels.map(({ level, exp }) => ({ level, value: exp })),
  }));

  const mainStatsClean: {
    [key: string]: {
      rank: number;
      levels: { level: number; value: number; valueFormat: string }[];
    }[];
  } = {};

  parsedLevels.forEach(({ rank, levels }) => {
    levels.forEach(({ level, props }) => {
      props.forEach((prop) => {
        const propType = PropTypeClean[prop.PropType as PropType];
        const prevIndex = mainStatsClean[
          propType
        ]
          && mainStatsClean[
            propType
          ].findIndex((mainStat) => mainStat.rank === rank);

        if (prevIndex !== undefined && prevIndex !== -1) {
          mainStatsClean[
            propType
          ][prevIndex] = {
            rank,
            levels: [
              ...(mainStatsClean[
                propType
              ][prevIndex]
                && mainStatsClean[
                  propType
                ][prevIndex].levels),
              {
                level,
                value: prop.Value,
                valueFormat: formatPropValue(
                  prop.Value,
                  propType.includes('Percent')
                    ? 'gamepercent'
                    : 'flat',
                ),
              },
            ],
          };
        } else {
          if (
            mainStatsClean[
              propType
            ]
          ) {
            mainStatsClean[
              propType
            ].push({
              rank,
              levels: [
                {
                  level,
                  value: prop.Value,
                  valueFormat: formatPropValue(
                    prop.Value,
                    propType.includes('Percent')
                      ? 'gamepercent'
                      : 'flat',
                  ),
                },
              ],
            });
          } else {
            mainStatsClean[
              propType
            ] = [
              {
                rank,
                levels: [
                  {
                    level,
                    value: prop.Value,
                    valueFormat: formatPropValue(
                      prop.Value,
                      propType.includes('Percent')
                        ? 'gamepercent'
                        : 'flat',
                    ),
                  },
                ],
              },
            ];
          }
        }
      });
    });
  });

  const mainStats: {
    statType: string;
    rarity: number;
    levels: { level: number; value: number }[];
  }[] = [];

  Object.entries(mainStatsClean).forEach(([statType, rarityArray]) => {
    rarityArray.forEach(({ rank, levels }) => {
      mainStats.push({ statType, rarity: rank, levels });
    });
  });

  return [...exp, ...mainStats];
};

export default calculateLevelCurves;
