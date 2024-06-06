var carreira = "Desenvolvedor Back-End"
var carreira2 = "Desenvolvedor Front-End"
function obterCarreira(carreira) {
    return `Meu objetivo de carreira é me tornar um ${carreira}`
}

const obterCarreiraArrow = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}`
}

console.log(obterCarreira(carreira))
console.log(obterCarreiraArrow(carreira2))