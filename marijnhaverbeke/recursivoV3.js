let i = 25
let c = 0
function ganhei(x, c){
    arr = [ 5, 10 , 15, 20]
    if( arr.indexOf(x)){
        console.log('Ganhei' + arr[c])
    }else{
        ganhei(x, ++c)
    }
}
console.log(ganhei(i))

