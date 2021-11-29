import { getCurrentTextMap } from '../globals';
import removeXML from './removeXML';

const getTextMapHash = (hash: string | number, shouldRemoveXML = false) => {
  let textMap = getCurrentTextMap();

  if (typeof textMap[hash] === 'undefined') {
    return 'Unknown TextHash';
  }

  return shouldRemoveXML ? removeXML(textMap[hash]) : textMap[hash];
};

export default getTextMapHash;
