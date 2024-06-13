const invertStr = (array) => {
  const novoArray = array.map((e) => e.split("").reverse().join(""));
  return novoArray;
};

arr = ["Azeitona", "Laranja", "Abacate", "Caju", "Abacaxi", "Morango"];

console.log(invertStr(arr));
