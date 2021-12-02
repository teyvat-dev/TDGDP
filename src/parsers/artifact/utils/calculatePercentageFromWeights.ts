/**
 * Helper for calculating the percentage of given weights. (since genshin calculates chances by weights)
 *
 * @param weights the weights to calculate the percentage from
 * @returns a map of the percentage of each weight
 */
const calculatePercentageFromWeights = (weights: number[]) => {
  const combinedWeights = weights.reduce((prev, curr) => prev + curr || 0, 0);

  return weights.map((weight) => weight / combinedWeights);
};

export default calculatePercentageFromWeights;
