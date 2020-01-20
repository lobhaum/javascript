let idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16 ){
	console.log('Votação Vedada')
} else if (idade<18 || idade > 65){
	console.log('Votação Facultativa')
} else {
	console.log('Voto Obrigatório')
}	
