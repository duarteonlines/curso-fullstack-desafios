var nums = [3, 6, 4, 1, 0, 6, 2]
function maiorNum(numeros) {
    var strNumbers = numeros.join(",")
    console.log(strNumbers)
    return Math.max(...strNumbers.split(","))
}

console.log(maiorNum(nums))