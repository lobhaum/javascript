let l,a
l = 20
a = 10

function walll(x,y){
    let r = ''
    for(let c = 0; c <= x; c++)
        r += '__'
    return r
    for(let c = 0; c<= y; c++)
        r += "|\n"
    return r
}
let casa = function(){
    console.log(`Largura: ${l}`)
    console.log(walll(l,a))
}
console.log(casa())
