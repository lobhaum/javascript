let power = function(base, exponent){
    let result = 1
    for (let c = 0; c < exponent; c++)
        result *= base
    return result
}

console.log(power(2,10))
