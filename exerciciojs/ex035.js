const multipleFive = (array) => {
  const novoArray = array.filter((e) => e % 5 === 0);
  return novoArray;
};

numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(multipleFive(numArray));
