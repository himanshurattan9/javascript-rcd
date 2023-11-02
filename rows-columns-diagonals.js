const generateCombos = (n) => {
  //    Write your code here
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }

  let winningCombinations = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i * n + j + 1);
    }
    winningCombinations.push(row);
  }

  for (let i = 0; i < n; i++) {
    let column = [];
    for (let j = 0; j < n; j++) {
      column.push(j * n + i + 1);
    }
    winningCombinations.push(column);
  }

  let diagonal1 = [];
  let diagonal2 = [];
  for (let i = 0; i < n; i++) {
    diagonal1.push(i * n + i + 1);
    diagonal2.push(i * n + (n - i));
  }
  winningCombinations.push(diagonal1);
  winningCombinations.push(diagonal2);

  return winningCombinations;
};

const [_1, _2, sizeStr, ..._3] = process.argv;

let size = Number(sizeStr);
let combos = generateCombos(size);

combos.forEach((combo) => {
  console.log(combo.join(","));
});

module.exports = { generateCombos };
