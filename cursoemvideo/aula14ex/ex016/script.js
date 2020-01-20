/**
 * Criação das variáveis e alocação na memória em formato number:
 */
let numIni = 0
let numFim = 0
let numPas = 0
let res    = 0
/**
 * Verificação das variáveis:
 */
//console.log(numIni, numFim, numPas, res)
/**
 * Redefinição das variaveis para formulário:
 */
numIni = window.document.querySelector('input#numIni')
numFim = window.document.querySelector('input#numFim')
numPas = window.document.querySelector('input#numPas')
res    = window.document.querySelector('div#res')
/**
 * Verificação das variáveis:
 */
//console.log(numIni, numFim, numPas, res)
/** 
 * Criação da Função contar()
 */
function contar(){
	let i = Number(numIni.value)
	let f = Number(numFim.value)
	let p = Number(numPas.value)
	let img = window.document.createElement('img')
	img.setAttribute('id', 'icone')
	img.setAttribute('src', './images/shield.png')
	res.appendChild(img)
	/**
   * Verificação das variáveis:
   */
	//console.log(i,f,p)
	/**
   * Realização do algoritmo
   */
	res.innerHTML = ''
 	for (let c = i; c <= f; c++) {
		let resultado = c * p
		if (resultado <= f){
			res.innerHTML += ` ${resultado}  `
			if (resultado < f){
				img.setAttribute('id', 'icone')
				img.setAttribute('src', './images/fast-forward.png')
				res.appendChild(img)     
			}else {
				img.setAttribute('id', 'icone')
				img.setAttribute('src', './images/shield.png')
				res.appendChild(img)    
			}
		}  
		
		//console.log(resultado)
	}
 

}


