const arrayString = (array) => {
  const novoArrary = array.map((e) => e.toUpperCase());
  return novoArrary;
};

arrStr = ["banana", "uva", "maca"];

console.log(arrayString(arrStr));
