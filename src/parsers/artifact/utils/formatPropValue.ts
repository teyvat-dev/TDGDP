const roundTo = (n: number, digits = 0) => {
  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return (Math.round(n) / multiplicator).toFixed(digits);
};

const formatPropValue = (
  value: number,
  propType: 'flat' | 'percent' | 'gamepercent',
) => {
  switch (propType) {
    case 'flat':
      return roundTo(value);
    case 'percent':
      return `${roundTo(value * 100, 2)}%`;
    case 'gamepercent':
      return `${roundTo(value * 100, 1)}%`;
    default:
      return '0';
  }
};

export default formatPropValue;
