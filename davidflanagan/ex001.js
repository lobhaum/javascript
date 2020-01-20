let s = 'hello'
console.log(s.toUpperCase())
console.log(s)
console.log(`Objetos`)
let o = {
	x:1
}
o.x	=	2
o.y	=	3

console.log('O valor do objeto o é: ')
console.log(o)

let a = [1,2,3]
a[0] = 0;
a[3] = 4
console.log('O valor do Array é: ')
console.log(a)
/**
 * Escopo de Variável
 */
let scope = 'global'
function checkscope(){
	let scope = 'local'
	return scope
}
checkscope()
let check = checkscope()
console.log(check)
