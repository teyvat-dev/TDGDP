const calculatePercentageFromWeights = (weights: number[]) => {
  const combinedWeights = weights.reduce((prev, curr) => prev + curr || 0, 0);

  return weights.map((weight) => weight / combinedWeights);
};

export default calculatePercentageFromWeights;
