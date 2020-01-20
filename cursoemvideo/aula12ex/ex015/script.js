/* Configurando o documento dinamicamente: */

//let title_el = window.document.querySelector('title')
//title_el.innerHTML = 'Verificador de Idade'
let hh1 = window.document.querySelector('h1#headerH1')
document.title ='Verificador de Idade'
hh1.innerHTML = 'Verificador de Idade'
// Construção da função verificar:
function verificar(){
	let data = new Date()
	let ano = data.getFullYear()
	let fAno = window.document.querySelector('input#txtano')
	let res = window.document.querySelector('div#res')
	if (fAno.lenght < 0 || fAno.value > ano){
		alert('[ERRO] verifique os dados inseridos')
	} else{
		let fsex = window.document.getElementsByName('radsex')
		let idade = ano - fAno.value
		//res.innerHTML = `Idade calculada: ${idade}`
		let genero = ''
		let img = document.createElement('img')
		img.setAttribute('id', 'foto')
		if(fsex[0].checked){
			genero = 'Homem'
			if (idade >= 0 && idade < 5){
				img.setAttribute ('src', './images/fase01h.png')
			} else if ( idade < 10){
				img.setAttribute ('src', './images/fase02h.png')
			} else if (idade < 15 ){
				img.setAttribute ('src', './images/fase03h.png')
			} else if (idade < 20 ){
				img.setAttribute ('src', './images/fase04h.png')
			}else if (idade < 30){
				img.setAttribute ('src', './images/fase05h.png')
			}else if (idade < 35){
				img.setAttribute ('src', './images/fase06h.png')
			}else if (idade < 66){
				img.setAttribute ('src', './images/fase07h.png')
			}else {
				img.setAttribute ('src', './images/fase08h.png')
			}
		}else if (fsex[1].checked){
			genero = 'Mulher'
			if (idade >= 0 && idade < 5){
				img.setAttribute ('src', './images/fase01m.png')
			} else if ( idade < 10){
				img.setAttribute ('src', './images/fase02m.png')
			} else if (idade < 15 ){
				img.setAttribute ('src', './images/fase03m.png')
			} else if (idade < 20 ){
				img.setAttribute ('src', './images/fase04m.png')
			}else if (idade < 30){
				img.setAttribute ('src', './images/fase05m.png')
			}else if (idade < 35){
				img.setAttribute ('src', './images/fase06m.png')
			}else if (idade < 66){
				img.setAttribute ('src', './images/fase07m.png')
			}else {
				img.setAttribute ('src', './images/fase08m.png')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
		res.appendChild(img)
	}

	//	function homem(){

//	}
}