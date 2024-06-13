function convertToString(array) {
  const novoArray = array.map((e) => e.toFixed(2));
  return novoArray;
}

numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(convertToString(numArray));
