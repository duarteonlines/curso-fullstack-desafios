const arrayAoQuadrado = (array) => {
  const novoArray = array.map((e) => e * e);
  return novoArray;
};
numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayAoQuadrado(numArray));
