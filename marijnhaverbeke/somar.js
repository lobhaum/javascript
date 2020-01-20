function range(start, end){
    let numero = []
    for(let c = start; c <= end; c++){
        let carga = [c]
        numero.push(carga)
    }
    return numero = numero.join()
}
console.log(range(11, 50))
