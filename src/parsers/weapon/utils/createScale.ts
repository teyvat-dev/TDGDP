type weaponCurves = typeof import('../../../../data/ExcelBinOutput/WeaponCurveExcelConfigData.json');

/**
 * Extrapolates a scale from a weapon curve
 *
 * @param initialValue the starting value of the scale
 * @param growCurveType the curve type to use for the growth
 * @param maxLevel the maximum level of the scale
 * @param curves the weapon curves to find and filter the curve from
 * @returns extrapolated scale
 */
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
