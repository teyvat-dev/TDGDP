import { LANG } from './types/enums';

let currentLanguage = LANG.EN;
let currentTextMap: { [key: string]: string } = {};

// Setters
const setCurrentLanguage = async (lang: LANG) => {
  currentLanguage = lang;
  currentTextMap = await import(`../../data/TextMap/TextMap${lang}.json`) as { [key: string]: string };
};

// Getters
const getCurrentLanguage = () => {
  return currentLanguage;
};
const getCurrentTextMap = () => {
  return currentTextMap;
};

export { getCurrentLanguage, getCurrentTextMap, setCurrentLanguage };
