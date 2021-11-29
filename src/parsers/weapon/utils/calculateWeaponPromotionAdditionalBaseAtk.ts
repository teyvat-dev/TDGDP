type weaponPromotes = typeof import('../../../../data/ExcelBinOutput/WeaponPromoteExcelConfigData.json');

const calculateWeaponPromotionAdditinalBaseAtk = (
  promotes: weaponPromotes,
  level: number,
) => {
  const promoteLevels = promotes.map((promotelevel) => {
    const promoteAddProp = promotelevel.AddProps.find(
      (prop) => prop.PropType === 'FIGHT_PROP_BASE_ATTACK',
    ) as { PropType: string; Value: number };

    return {
      maxLevel: promotelevel.UnlockMaxLevel,
      addATK: promoteAddProp.Value || 0,
    };
  });

  if (level <= promoteLevels[0].maxLevel) return promoteLevels[0].addATK || 0;

  if (level > promoteLevels[0].maxLevel && level <= promoteLevels[1].maxLevel) {
    return promoteLevels[1].addATK;
  }

  if (level > promoteLevels[1].maxLevel && level <= promoteLevels[2].maxLevel) {
    return promoteLevels[2].addATK;
  }

  if (
    promoteLevels[3]
    && level > promoteLevels[2].maxLevel
    && level <= promoteLevels[3].maxLevel
  ) {
    return promoteLevels[3].addATK;
  }

  if (
    promoteLevels[4]
    && level > promoteLevels[3].maxLevel
    && level <= promoteLevels[4].maxLevel
  ) {
    return promoteLevels[4].addATK;
  }

  if (
    promoteLevels[5]
    && level > promoteLevels[4].maxLevel
    && level <= promoteLevels[5].maxLevel
  ) {
    return promoteLevels[5].addATK;
  }

  if (
    promoteLevels[6]
    && level > promoteLevels[5].maxLevel
    && level <= promoteLevels[6].maxLevel
  ) {
    return promoteLevels[6].addATK;
  }

  return undefined;
};

export default calculateWeaponPromotionAdditinalBaseAtk;
