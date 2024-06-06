notas = [7.0, 6.5, 5.0]

console.log("A primeira nota do aluno é: " + notas[0])
console.log("A segunda nota do aluno é: " + notas[1])
console.log("A terceira nota do aluno é: " + notas[2])


media = (notas[0] + notas[1] + notas[2]) / notas.length
mediaAprovacao = 7

console.log("A média do aluno é: " + media.toFixed(2))

if (media >= mediaAprovacao) {
    console.log("Aprovado...")
} else {
    console.log("Reprovado...")
}
