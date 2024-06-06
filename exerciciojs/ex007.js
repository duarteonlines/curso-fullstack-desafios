const aluno = {
    nome: "Aldemar",
    cpf: "678.234.456-23",
    cidade: "Bananeiras",
    notas: [6.8, 8.0, 7.3, 5.0]
}

media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length
random = aluno.notas[Math.floor(Math.random() * aluno.notas.length)]

console.log(`Nome: ${aluno.nome}, CPF: ${aluno.cpf}, Cidade: ${aluno.cidade}`)
console.log(`Notas: 1 = ${aluno.notas[0]}, 2 = ${aluno.notas[1]}, 3 = ${aluno.notas[2]}, 4 = ${aluno.notas[3]}`)
console.log(`Media: ${media.toFixed(2)}`)
console.log(`Nota Aleatória convertida: ${random * 10.0}`)