/**
 * Dynamically imports and exports the weapons data.
 */
const getWeaponDataIndex = async () => ({
  equipAffixs: (await import('../../../../data/ExcelBinOutput/EquipAffixExcelConfigData.json')).default,
  materialConfigs: (await import('../../../../data/ExcelBinOutput/MaterialExcelConfigData.json')).default,
  weaponCurves: (await import('../../../../data/ExcelBinOutput/WeaponCurveExcelConfigData.json')).default,
  weaponConfigs: (await import('../../../../data/ExcelBinOutput/WeaponExcelConfigData.json')).default,
  weaponPromotes: (await import('../../../../data/ExcelBinOutput/WeaponPromoteExcelConfigData.json')).default,
});

export default getWeaponDataIndex;
