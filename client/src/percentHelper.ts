/*
  @desc Helper functions for converting between percentages and values
  @example getPercentage([0, 100], 50) => 0.5
  @example getFromPercentage([0, 100], 0.5) => 50
*/

/*
  @param {Array} range - [min, max]
  @param {Number} value - value to convert to percentage
  @returns {Number} percentage
*/
export const getPercentage = (range: readonly [number, number], value: number) => {
  if (value < range[0]) return 0
  if (value > range[1]) return 1
  const [min, max] = range
  return (value - min) / (max - min)
}

/*
  @param {Array} range - [min, max]
  @param {Number} percentage - percentage to convert to value
  @returns {Number} value
*/
export const getFromPercentage = (range: readonly [number, number], percentage: number) => {
  if (percentage < 0) return range[0]
  if (percentage > 1) return range[1]
  const [min, max] = range
  return min + percentage * (max - min)
}
