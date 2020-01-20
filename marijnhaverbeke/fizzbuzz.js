/**
let i = 0
for(let c = 0; c <= 100; c++){
    console.log(i)
    if(i%3==0){
        continue 
        console.log('FizzBuzz')
        //continue
    }
    i++
}
 **/
/** Programa funcionando para 3:
let i = 0
for(let c = 0; c<=100; c++){
if(i%3==0){
    console.log('fizbizz')
}else{
    console.log(i)
}
i++
}
*/
let i = 0
for(let c = 0; c <= 100; c++){
if( i%3 == 0 && i%5 == 0){
    console.log('fizzbuzz')
}else if (i%3 == 0 && i%5 != 0){
    console.log('fizz')
}else if (i%3 != 0 && i%5 == 0){
    console.log('buzz')
}else{
    console.log(i)
}i++
}
