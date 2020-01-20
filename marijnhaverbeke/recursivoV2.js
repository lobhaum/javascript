function contador(min, max){
    console.log(min)
    if( min < max){
        contador(++min, max)
    }
}
console.log(contador(1, 10))
