import getReadbale from '../../global/helpers/getReadable';
import getTextMapHash from '../../global/helpers/getTextMapHash';
import type { Config } from '../../global/types/config';
import { WeaponSubStatType, WeaponSubStatTypeClean, WeaponType, WeaponTypeClean } from './enums';
import getWeaponDataIndex from './utils/getWeaponDataIndex';
import parseAscensions from './utils/parseAscensions';
import parsePassive from './utils/parsePassive';
import parseStats from './utils/parseStats';

const parse = async (config: Config) => {
  let parsedData = [];
  const weaponDataIndex = await getWeaponDataIndex();

  for (const weapon of weaponDataIndex.weaponConfigs) {
    const weaponId = weapon.Id;
    const name = getTextMapHash(weapon.NameTextMapHash);

    const description = getTextMapHash(weapon.DescTextMapHash);

    const lore = await getReadbale(`Weapon${weapon.Id}`);

    const promotes = weaponDataIndex.weaponPromotes.filter(
      (weaponPromote) => weaponPromote.WeaponPromoteId === weapon.WeaponPromoteId,
    );

    const passive = parsePassive(
      weaponDataIndex.equipAffixs.filter(({ Id }) => weapon.SkillAffix[0] === Id),
    );
    const rarity = weapon.RankLevel;
    const stats = parseStats(weapon.WeaponProp, promotes, weaponDataIndex.weaponCurves);

    const type = WeaponTypeClean[weapon.WeaponType as WeaponType];
    const subStatType = weapon.WeaponProp[1]
      && WeaponSubStatTypeClean[weapon.WeaponProp[1].PropType as WeaponSubStatType];

    promotes.shift();
    const ascensions = parseAscensions(promotes, weaponDataIndex.materialConfigs);

    if (name) {
      parsedData.push({
        id: weaponId,
        weapon: {
          type,
          name,
          description,
          passive,
          rarity,
          lore,
          ATKLevels: stats.base,
          subStatLevels: stats.subStat,
          subStatType,
        },
        ascensions,
      });
    }
  }

  return parsedData;
};

export default parse;
