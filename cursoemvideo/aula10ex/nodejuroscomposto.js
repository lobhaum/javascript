// Formula:
// M = C x (1+i)^t
let c = Number(1000)
let i = Number(0.02)
let t = Number(5)

let m = c*(1+i)**t
let mm = Math.round((m-c)*10)/10
console.log(`Meu montande de ${c} em ${t}meses renderá ${mm}`)
