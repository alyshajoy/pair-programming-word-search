const transpose = function (matrix) {
    const result = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      result.push([]);
    }
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix[j].length; k++) {
        result[k].push(matrix[j][k]);
      }
    }
  
    console.log(result);
    return result;
  };

const wordSearch = (letters, word) => { 
    if (letters.length < 1) {
        return false;
    }
    const upperCaseWord = word.toUpperCase();
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(upperCaseWord)) {
            return true;
        }
    }

    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(upperCaseWord)) {
            return true;
        }
    }
    return false;
};


const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'BOB');

console.log("result:", result);


module.exports = wordSearch


// describe("#wordSearch()", function() {
//     it("should return false if the word is not present", function() {
//       const result = wordSearch([
//         ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//         ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//         ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//         ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//         ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//         ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//         ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//         ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//         ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//       ], 'FRANK')
  
//       assert.isFalse(result);
//     });
  
//     it("should return true if the word is present", function() {
//       const result = wordSearch([
//         ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//         ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//         ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//         ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//         ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//         ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//         ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//         ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//         ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//       ], 'SEINFELD')
  
//       assert.isTrue(result);
//     });
//   });