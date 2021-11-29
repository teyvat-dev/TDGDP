import calculateWeaponPromotionAdditinalBaseAtk from './calculateWeaponPromotionAdditionalBaseAtk';

type weaponCurves = typeof import('../../../../data/ExcelBinOutput/WeaponCurveExcelConfigData.json');
type weaponPromotes = typeof import('../../../../data/ExcelBinOutput/WeaponPromoteExcelConfigData.json');

const createScaleWithPromotes = (
  initialValue: number,
  growCurveType: string,
  promotes: weaponPromotes,
  curves: weaponCurves,
) => {
  const weaponScale = curves
    .map((level) => {
      const promoteBaseAtk = calculateWeaponPromotionAdditinalBaseAtk(
        promotes,
        level.Level,
      );

      if (promoteBaseAtk === undefined) {
        return undefined;
      }

      return {
        level: level.Level,
        value: initialValue
            * (level.CurveInfos.find((item) => item.Type === growCurveType)
              ?.Value || 1)
          + promoteBaseAtk,
      };
    })
    .filter((item) => item);

  promotes.forEach((promote, index) => {
    const promoteAddProp = promotes[index + 1]
      && (promotes[index + 1].AddProps.find(
        (prop) => prop.PropType === 'FIGHT_PROP_BASE_ATTACK',
      ) as { PropType: string; Value: number });

    if (!promoteAddProp) {
      return;
    }

    weaponScale.push({
      level: promote.UnlockMaxLevel + 0.5,
      value: initialValue
          * (curves
            .find((curve) => curve.Level === promote.UnlockMaxLevel)
            ?.CurveInfos.find((item) => item.Type === growCurveType)?.Value
            || 1)
        + promoteAddProp.Value,
    });
  });

  // eslint-disable-next-line
  // @ts-ignore
  return weaponScale.sort((a, b) => a.level - b.level);
};

export default createScaleWithPromotes;
