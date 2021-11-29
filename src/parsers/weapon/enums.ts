export enum WeaponType {
  Bow = 'WEAPON_BOW',
  Catalyst = 'WEAPON_CATALYST',
  Claymore = 'WEAPON_CLAYMORE',
  Polearm = 'WEAPON_POLE',
  Sword = 'WEAPON_SWORD_ONE_HAND',
}

export enum WeaponTypeClean {
  'WEAPON_BOW' = 'Bow',
  'WEAPON_CATALYST' = 'Catalyst',
  'WEAPON_CLAYMORE' = 'Claymore',
  'WEAPON_POLE' = 'Polearm',
  'WEAPON_SWORD_ONE_HAND' = 'Sword',
}

export enum WeaponSubStatType {
  DEFPercent = 'FIGHT_PROP_DEFENSE_PERCENT',
  HPPercent = 'FIGHT_PROP_HP_PERCENT',
  ATKPercent = 'FIGHT_PROP_ATTACK_PERCENT',
  CritDMGPercent = 'FIGHT_PROP_CRITICAL_HURT',
  CritRatePercent = 'FIGHT_PROP_CRITICAL',
  ElementalMastery = 'FIGHT_PROP_ELEMENT_MASTERY',
  EnergyRechargePercent = 'FIGHT_PROP_CHARGE_EFFICIENCY',
  PhysicalDMGPercent = 'FIGHT_PROP_PHYSICAL_ADD_HURT',
}

export enum WeaponSubStatTypeClean {
  'FIGHT_PROP_DEFENSE_PERCENT' = 'DEFPercent',
  'FIGHT_PROP_HP_PERCENT' = 'HPPercent',
  'FIGHT_PROP_ATTACK_PERCENT' = 'ATKPercent',
  'FIGHT_PROP_CRITICAL_HURT' = 'CritDMGPercent',
  'FIGHT_PROP_CRITICAL' = 'CritRatePercent',
  'FIGHT_PROP_ELEMENT_MASTERY' = 'ElementalMastery',
  'FIGHT_PROP_CHARGE_EFFICIENCY' = 'EnergyRechargePercent',
  'FIGHT_PROP_PHYSICAL_ADD_HURT' = 'PhysicalDMGPercent',
}
