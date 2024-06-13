const arraryObj = [
  { nome: "Pedro", idade: 20, notas: [7.0, 6.5, 5.0] },
  { nome: "Maria", idade: 25, notas: [8.0, 7.5, 6.0] },
  { nome: "Joaquim", idade: 18, notas: [9.0, 8.5, 7.0] },
  { nome: "Ana", idade: 17, nota: [10.0, 9.5, 8.0] },
  { nome: "Lucas", idade: 16, nota: [5.0, 4.5, 3.0] },
];

const novoArray = arraryObj.filter((obj) => obj.idade >= 18);

console.log(novoArray);
