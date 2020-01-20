/**
 * Contar  007 vacas
 * Contar  011 galinhas
 **/
function inventario(v,g){
    /* v = vagas
     * g = galinhas
     * c = contador
     */
    let vString = String(v) //transforma o valor contido em v para string
    let gString = String(g) // transforma o valor contido em g para string

    while(vString.length < 3) //conta o tamanho contido em vString se for menor que 3
        vString = "0" + vString // acrescenta um zero antes do valor contido na propria string vString
    
    while(gString.length < 3)
        gString = "0"+ gString
    console.log(`Total de Vacas: ${vString} \nTotal de Galinhas: ${gString}`)
}
console.log(inventario(7,11))
