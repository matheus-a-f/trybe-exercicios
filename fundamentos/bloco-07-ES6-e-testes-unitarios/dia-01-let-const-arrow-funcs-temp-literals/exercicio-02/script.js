const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedArray = oddsAndEvens.sort(function(a, b){return a - b});

console.log(`Os números ${sortedArray[0]}, ${sortedArray[1]}, ${sortedArray[2]}, ${sortedArray[3]}, ${sortedArray[4]}, ${sortedArray[5]} se encontram ordenados de forma crescente!`);