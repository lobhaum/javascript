const arr = [01, 08, 19, 33, 36, 48]
function verificacao(valor, posicao){
    if(valor === arr[posicao]){
        return console.log('valor encontrado: ' + arr[posicao] +' na posição: '+ arr.indexOf(valor))
    }else{
        return  verificacao(valor, ++posicao)
    }
}
console.log(verificacao(08,0))
