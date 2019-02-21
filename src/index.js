/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const result = preferences.reduce((acc, first, index) => {
    second = preferences[first - 1] - 1;
    third = preferences[second] - 1;
    return ((third === index) ? acc + 1 : acc);
  }, 0);
  return Math.floor(result / 3);
};
