const decrementArray = (array) => {
  const novoArray = array.map((e) => e - 1);
  return novoArray;
};

numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(decrementArray(numArray));
