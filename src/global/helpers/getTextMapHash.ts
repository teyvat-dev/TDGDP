import removeXML from './removeXML';

import { getCurrentTextMap } from '../globals';

/**
 * Get the TextMapHash from the current TextMap
 *
 * @param hash The texthash to get
 * @param shouldRemoveXML should we remove the XML from the text
 * @returns The text from the TextMap
 */
const getTextMapHash = (hash: string | number, shouldRemoveXML = false) => {
  let textMap = getCurrentTextMap();

  if (typeof textMap[hash] === 'undefined') {
    return 'Unknown TextHash';
  }

  return shouldRemoveXML ? removeXML(textMap[hash]) : textMap[hash];
};

export default getTextMapHash;
