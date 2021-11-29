type weaponCurves = typeof import('../../../../data/ExcelBinOutput/WeaponCurveExcelConfigData.json');

const createScale = (
  initialValue: number,
  growCurveType: string,
  maxLevel: number,
  curves: weaponCurves,
) =>
  curves
    .map(({ Level, CurveInfos }) => {
      if (Level > maxLevel) {
        return undefined;
      }
      return {
        level: Level,
        value: initialValue
          * (CurveInfos.find((item) => item.Type === growCurveType)?.Value || 1),
      };
    })
    .filter((item) => item);

export default createScale;
