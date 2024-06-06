var nums = [3, 6, 4, 1, 0, 6, 2]

const calcularMedia = (numeros) => {
    let soma = 0
    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    qtd = numeros.length
    media = soma / qtd
    return media
}

console.log(calcularMedia(nums).toFixed(2))