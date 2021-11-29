// Dynamically imports and exports the weapons data.

const getArtifactDataIndex = async () => ({
  equipAffixs: (await import('../../../../data/ExcelBinOutput/EquipAffixExcelConfigData.json')).default,
  reliquaryCodexs: (await import('../../../../data/ExcelBinOutput/ReliquaryCodexExcelConfigData.json')).default,
  reliquaryConfigs: (await import('../../../../data/ExcelBinOutput/ReliquaryExcelConfigData.json')).default,
  reliquarySets: (await import('../../../../data/ExcelBinOutput/ReliquarySetExcelConfigData.json')).default,
  reliquaryAffixs: (await import('../../../../data/ExcelBinOutput/ReliquaryAffixExcelConfigData.json')).default,
  reliquaryMainProps: (await import('../../../../data/ExcelBinOutput/ReliquaryMainPropExcelConfigData.json')).default,
  reliquaryLevels: (await import('../../../../data/ExcelBinOutput/ReliquaryLevelExcelConfigData.json')).default,
  reliquaryPowerups: (await import('../../../../data/ExcelBinOutput/ReliquaryPowerupExcelConfigData.json')).default,
});

export default getArtifactDataIndex;
