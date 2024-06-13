const maiorQueDez = (array) => {
  const novoArray = array.filter((e) => e > 10);
  return novoArray;
};

numArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(maiorQueDez(numArray));
