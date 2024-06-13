const arraryObj = [
  { nome: "Pedro", idade: 20, notas: [7.0, 6.5, 5.0] },
  { nome: "Maria", idade: 25, notas: [8.0, 7.5, 6.0] },
  { nome: "Joaquim", idade: 30, notas: [9.0, 8.5, 7.0] },
];

const novoArray = arraryObj.map((obj) => obj.nome);

console.log(novoArray);
