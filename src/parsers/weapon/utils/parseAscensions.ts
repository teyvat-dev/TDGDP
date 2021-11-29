import getTextMapHash from '../../../global/helpers/getTextMapHash';

type WeaponPromotes = typeof import('../../../../data/ExcelBinOutput/WeaponPromoteExcelConfigData.json');
type MaterialConfigs = typeof import('../../../../data/ExcelBinOutput/MaterialExcelConfigData.json');

const parseAscensions = (promotes: WeaponPromotes, materialConfigs: MaterialConfigs) => {
  const ascensions = promotes.map((promote) => ({
    level: promote.PromoteLevel,
    recipe: (promote.CostItems as {
      Id: number;
      Count: number;
    }[])
      .filter((item) => item && item.Id && item.Count)
      .map((item) => ({
        name: getTextMapHash(materialConfigs.find(({ Id }) => item.Id === Id)?.NameTextMapHash),
        count: item.Count,
        extras: {
          gameId: item.Id,
        },
      })),
    cost: promote.CoinCost,
    maxLevel: promote.UnlockMaxLevel,
    requiredPlayerLevel: promote.RequiredPlayerLevel,
  }));

  return ascensions;
};

export default parseAscensions;
