import getTextMapHash from '../../../global/helpers/getTextMapHash';
import { ArtifactType, ArtifactTypeClean } from '../enum';

type ReliquaryConfigs = typeof import('../../../../data/ExcelBinOutput/ReliquaryExcelConfigData.json');

/**
 * Helper to parse Reliquary data to used Artifact data
 *
 * @param id the id of the artifact
 * @param configs configs data
 * @returns parsed artifact data
 */
const parseReliquaryToArtifact = (id: number, configs: ReliquaryConfigs) => {
  const artifact = configs.find(({ Id }) => id === Id);
  const type = ArtifactTypeClean[artifact.EquipType as ArtifactType];
  const baseExpAsOffering = artifact.BaseConvExp;
  const moraOnDestory = artifact.DestroyReturnMaterialCount[0] || 0;
  const name = getTextMapHash(artifact.NameTextMapHash);
  const description = getTextMapHash(artifact.DescTextMapHash);
  /* const lore =
  localization.find(
    ({Id}) =>
      document.find(({Id}) => artifact.StoryId === Id)?.ContentLocalizedId ===
      Id
  )?.DefaultPath || null;*/
  const extras = {
    setId: artifact.SetId,
    icon: artifact.Icon, // Not yet
    maxLevel: artifact.MaxLevel - 1,
  };

  return {
    name,
    description,
    type,
    baseExpAsOffering,
    moraOnDestory,
    extras,
  };
};

export default parseReliquaryToArtifact;
