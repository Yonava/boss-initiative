// takes in a range and a value and returns the percentage of the value in the range. ie getPercentage([0, 100], 50) => 0.5
export const getPercentage = (range: readonly [number, number], value: number) => {
  if (value < range[0]) return 0
  if (value > range[1]) return 1
  const [min, max] = range
  return (value - min) / (max - min)
}

// takes in a range and a percentage and returns the value in the range. ie getFromPercentage([0, 100], 0.5) => 50
export const getFromPercentage = (range: readonly [number, number], percentage: number) => {
  if (percentage < 0) return range[0]
  if (percentage > 1) return range[1]
  const [min, max] = range
  return min + percentage * (max - min)
}
