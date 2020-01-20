function bar(x){
    let barra = '_'
    if(!(x)) x = 50
    for(let c = 0; c <= x; c++)
        barra += '_'
    let r = console.log(barra)
    return r
}
bar(60)
let array = [ 1, 2, 3]
for(let c = 0; c < array.length; c++){
    let atual = array[c]
    console.log(atual)
}
bar(60)
function logEach(array){
    for (let c = 0; c <array.length; c++)
        console.log(array[c])
}
bar(60)
function forEach(array, action){
    for(let c = 0; c < array.length; c++)
        action(array[c])
}
forEach(['Appetizer', 'Entry', 'Aperitive', 'Hors d\'oeuvre'],console.log)
bar(60)
let numeros = [1, 2, 3, 4, 5], soma = 0
forEach(numeros,function(numero){
    soma += numero
})
console.log(soma)
bar()
/*
 * Funções de ordem superior
 */
function maiorQue(n){
    return function(m) { //Funções que criam novas funções
        return m > n
    }
}
let maiorQue10 = maiorQue(10)
console.log(maiorQue10(11))
bar(60)
function barulho(f){
    return function(arg){
        console.log('chamando com:', arg)
        let valor = f(arg)
        console.log('chamando com:', arg, '- tem: ', valor)
        return valor
    }
}
barulho(Boolean)(0)
