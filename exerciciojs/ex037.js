function finalA(array) {
  const novoArray = array.filter((e) => e[e.length - 1] === "a");
  return novoArray;
}

arrayString = ["Abacaxi", "Uva", "Maca", "Mamao", "Melao"];
console.log(finalA(arrayString));
