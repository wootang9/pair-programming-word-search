//Pair Programming with @jabrilg & @wootang9
const {transpose} = require('../../d2/matrix_transposition');

const wordSearch = (letters, word) => {
  let wordLength = word.length;
  let gridLength = letters.length;
  const flippedArray = transpose(letters);
  const checkGrid = function(grid, word) {
    for (let row of grid) {
      for (let i = 0; i < gridLength; i++) {
        let testString = row.slice(i, wordLength).join('');
        if (testString === word) {
          return true;
        }
      }
    }
  };
  if (checkGrid(letters, word)) {
    return true;
  } else if (checkGrid(flippedArray, word)) {
    return true;
  } else return false; 
};
module.exports = wordSearch;
