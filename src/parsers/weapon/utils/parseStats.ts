import createScale from './createScale';
import createScaleWithPromotes from './createScaleWithPromotes';

type weaponPromotes = typeof import('../../../../data/ExcelBinOutput/WeaponPromoteExcelConfigData.json');
type weaponConfigs = typeof import('../../../../data/ExcelBinOutput/WeaponExcelConfigData.json');
type weaponCurves = typeof import('../../../../data/ExcelBinOutput/WeaponCurveExcelConfigData.json');

const parseStats = (
  weaponProps: weaponConfigs[0]['WeaponProp'],
  promotes: weaponPromotes,
  curves: weaponCurves,
) => {
  return {
    base: weaponProps[0] && weaponProps[0].InitValue
      ? createScaleWithPromotes(
        weaponProps[0].InitValue,
        weaponProps[0].Type,
        promotes,
        curves,
      )
      : [],
    subStat: weaponProps[1] && weaponProps[1].InitValue
      ? createScale(
        weaponProps[1].InitValue,
        weaponProps[1].Type,
        promotes[promotes.length - 1]?.UnlockMaxLevel || 90,
        curves,
      )
      : [],
  };
};

export default parseStats;
