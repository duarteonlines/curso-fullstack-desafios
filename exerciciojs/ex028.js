const comecaA = (array) => {
  const novoArray = array.filter((e) => e.startsWith("A"));
  return novoArray;
};

arr = ["Azeitona", "Laranja", "Abacate", "Caju", "Abacaxi", "Morango"];

console.log(comecaA(arr));
