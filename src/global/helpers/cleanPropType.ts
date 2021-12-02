import { PropType, PropTypeClean } from '../types/enums';

/**
 * Helper for returning the clean prop type
 *
 * @param propType - The prop type to find the clean type for
 * @returns clean prop type
 */
const cleanPropType = (propType: PropType) => PropTypeClean[propType];

export default cleanPropType;
