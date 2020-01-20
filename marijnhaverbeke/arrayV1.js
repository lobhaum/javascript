/*
* array de 4 elementos ([76, 9, 4, 1])
* ou 2 
* array de 2 elementos ([76, 9])([4, 1])
* digito a esquerda: importante
* digito a direita: menos importantei
*/
function phi(table){
    return (table[3]*table[0] - table[2]*table[1])/
        Math.sqrt(
            (table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])
    
        )
}
console.log(phi([76, 9, 4, 1]))
