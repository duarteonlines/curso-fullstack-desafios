const multiplosDeTres = (array) => {
  const novoArray = array.filter((e) => e % 3 === 0);
  return novoArray;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(multiplosDeTres(arr));
