const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = array.reduce((a, b) => {
  return a + b;
}, 0);

console.log(soma);
