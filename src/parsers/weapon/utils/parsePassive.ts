import getTextMapHash from '../../../global/helpers/getTextMapHash';

type equipAffixs = typeof import('../../../../data/ExcelBinOutput/EquipAffixExcelConfigData.json');

const parsePassive = (passives: equipAffixs) => {
  if (passives.length <= 0) {
    return null;
  }

  const name = getTextMapHash(passives[0].NameTextMapHash);
  const levels = passives.map((passive) => {
    const description = getTextMapHash(passive.DescTextMapHash, true);
    const additionalProperties = passive.AddProps.filter((prop) => prop.PropType);
    const params = passive.ParamList.filter((param) => param > 0);
    const level = passive.Level ? passive.Level + 1 : 1;
    const extras = { config: passive.OpenConfig, id: passive.AffixId };

    return { level, description, additionalProperties, params, extras };
  });

  return {
    name,
    levels,
  };
};

export default parsePassive;
