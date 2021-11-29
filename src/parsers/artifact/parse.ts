import getTextMapHash from '../../global/helpers/getTextMapHash';
import type { Config } from '../../global/types/config';

import calculateLevelCurves from './utils/calculateLevelCurves';
import getArtifactDataIndex from './utils/getArtifactDataIndex';
import parseArtifactPowerups from './utils/parseArtifactPowerups';
import parseArtifactStatPossibilities from './utils/parseArtifactStatPossibilities';
import parseReliquaryToArtifact from './utils/parseReliquaryToArtifact';

const artifacts = async (config: Config) => {
  const artifactDataIndex = await getArtifactDataIndex();

  const levelCurves = calculateLevelCurves(artifactDataIndex.reliquaryLevels);

  const powerups = parseArtifactPowerups(artifactDataIndex.reliquaryPowerups);

  const possibilities = parseArtifactStatPossibilities(
    artifactDataIndex.reliquaryMainProps,
    artifactDataIndex.reliquaryAffixs,
  );

  const artifactSetsBase: {
    [key: string]: {
      name: string;
      levels?: any;
      pieceBonusFour?: string;
      pieceBonusTwo?: string;
      pieceBonusOne?: string;
    };
  } = {};

  for (const entry of artifactDataIndex.reliquaryCodexs) {
    if (!artifactSetsBase[entry.SuitId]) {
      const setNameHash = artifactDataIndex.equipAffixs.find(
        ({ Id }) =>
          Id
            === artifactDataIndex.reliquarySets.find(({ SetId }) => SetId === entry.SuitId)
              ?.EquipAffixId,
      )?.NameTextMapHash;

      if (!setNameHash) {
        continue;
      }

      artifactSetsBase[entry.SuitId] = { name: getTextMapHash(setNameHash) };
    }

    artifactSetsBase[entry.SuitId].levels = {
      ...(artifactSetsBase[entry.SuitId]
        && artifactSetsBase[entry.SuitId].levels),
      [entry.Level]: {
        cup: entry.CupId ? parseReliquaryToArtifact(entry.CupId, artifactDataIndex.reliquaryConfigs) : null,
        leather: entry.LeatherId
          ? parseReliquaryToArtifact(entry.LeatherId, artifactDataIndex.reliquaryConfigs)
          : null,
        cap: entry.CapId ? parseReliquaryToArtifact(entry.CapId, artifactDataIndex.reliquaryConfigs) : null,
        flower: entry.FlowerId
          ? parseReliquaryToArtifact(entry.FlowerId, artifactDataIndex.reliquaryConfigs)
          : null,
        sand: entry.SandId ? parseReliquaryToArtifact(entry.SandId, artifactDataIndex.reliquaryConfigs) : null,
      },
    };

    const equipAffix = artifactDataIndex.equipAffixs.filter(
      ({ Id }) =>
        Id
          === artifactDataIndex.reliquarySets.find(({ SetId }) => SetId === entry.SuitId)
            ?.EquipAffixId,
    );

    if (equipAffix.length === 1) {
      artifactSetsBase[entry.SuitId].pieceBonusOne = getTextMapHash(equipAffix[0].DescTextMapHash);
    }

    if (equipAffix.length === 2) {
      artifactSetsBase[entry.SuitId].pieceBonusTwo = getTextMapHash(equipAffix[0].DescTextMapHash);
      artifactSetsBase[entry.SuitId].pieceBonusFour = getTextMapHash(equipAffix[1].DescTextMapHash);
    }
  } // Why is this just so bad, why was i so tired?

  const artifactSets: {
    name: string;
    rarities: number[];
    pieceBonusFour?: string;
    pieceBonusTwo?: string;
    pieceBonusOne?: string;
    extras: {
      setId: number;
    };
  }[] = [];

  const artifacts: {
    name: string;
    description: string;
    type: string;
    baseExpAsOffering: number;
    moraOnDestory: number;
    lore?: string;
    rarity: number;
    source?: any;
    image?: string;
    extras?: {
      setId?: number;
      maxLevel?: number;
    };
  }[] = [];

  Object.entries(artifactSetsBase).forEach(([setId, artifactSet]) => {
    artifactSets.push({
      name: artifactSet.name,
      pieceBonusFour: artifactSet.pieceBonusFour,
      pieceBonusTwo: artifactSet.pieceBonusTwo,
      pieceBonusOne: artifactSet.pieceBonusOne,
      rarities: Object.keys(artifactSet.levels).map((key) => Number(key)),
      extras: { setId: Number(setId) },
    });

    // So many anys here, this can be fixed by typing the original
    Object.entries(artifactSet.levels).forEach(
      ([rarity, value]: [string, any]) => {
        Object.values(value).forEach((artifact: any) => {
          if (artifact) {
            artifacts.push({
              name: artifact.name,
              description: artifact.description,
              type: artifact.type,
              baseExpAsOffering: artifact.baseExpAsOffering,
              moraOnDestory: artifact.moreaOnDestory,
              lore: artifact.lore,
              rarity: Number(rarity),
              extras: artifact.extras,
            });
          }
        });
      },
    );
  });

  // TODO: make all of these split into their own files

  return { artifacts, artifactSets, powerups, possibilities, levelCurves };
};

export default artifacts;
