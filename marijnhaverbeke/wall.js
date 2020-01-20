let l = 10
let a = 10
function wall(x,y){
    /** for(let c = 0, p = '--'; c <= x; c++){
        p += '--'
        console.log(p)
    }//console.log(p) */
    let result = ''
    let largura = function(size){
        for (let c = 0; c <= l; c++)
            result += '_'
    }
    let altura = function(size){
        result += '|'
        for (let c = 0; c <= a; c++)
            result += '/'
    }
    largura(x)
    altura(y)
    return result
}
console.log(wall(l,a))
