function power(base, exponent){
    if(exponent == undefined)
        exponent =2
    let result = 1
    for (let c = 0; c < exponent; c++)
        result *= base
    return result
}
console.log(power(4))
console.log(power(4,3))
