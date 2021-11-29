import { PropType, PropTypeClean } from '../types/enums';

const cleanPropType = (propType: PropType) => PropTypeClean[propType];

export default cleanPropType;
