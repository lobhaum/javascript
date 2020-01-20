/*
 * variaveis:
 * n = numero (quantidade)
 * t = tamanho da string
 */
function contar(n, t){
    let nString = String(n)
    while(nString.length < t)
        nString = '0' + nString
    return nString
}
// g: galinha p: porco v: vaca
function inventario(g,p,v){
    console.log(`Quantidade de galinhas: `+ contar(g,3)+ ` Galinhas`)
    console.log(`Quantidade de porcos: ` + contar(p,3)+ ' Porcos')
    console.log('Quantidade de vacas: '+ contar(p,3)+ ' Vacas')
}
console.log(inventario(7,16,3))
