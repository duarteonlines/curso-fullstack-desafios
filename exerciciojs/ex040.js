const primeiraUpper = (array) => {
  const novoArray = array.map((e) => e[0].toUpperCase() + e.slice(1));
  return novoArray;
};

// slice retorna a string sem o primeiro char

arrayStr = ["pedro", "maria", "joaquim", "ana"];

console.log(primeiraUpper(arrayStr));
