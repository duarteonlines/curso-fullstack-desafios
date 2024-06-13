function arraryString(array) {
  const novoArrary = array.map((e) => e.toLowerCase());
  return novoArrary;
}

arrStr = ["CARRO", "MOTO", "BARCO", "AVIÃO", "CAMINHÃO"];

console.log(arraryString(arrStr));
