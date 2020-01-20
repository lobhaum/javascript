function carregar(){
	let msg = window.document.querySelector('div#msg')
	let img = window.document.querySelector('img#imagem')
	let data = new Date()
	let hora = data.getHours()
	//const foto = './images/foto'
	//let hora = 13
	//msg.innerHTML = `Agora é ${hora} hora(s)`
	if (hora == 0 || hora == 1 ){
		msg.innerHTML = `Agora é ${hora} hora`
		img.src = './images/fotonoite.png'
		document.body.style.background = '#013d4a'

	} else if (hora < 12){
		msg.innerHTML = `Agora são ${hora} horas`
		img.src = './images/fotomanha.png'
		document.body.style.background = '#d89e55'
	} else if (hora >= 12 && hora <18){
		msg.innerHTML = `Agora são ${hora} horas`
		img.src = './images/fototarde.png'
		document.body.style.background = '#67b2c5'
	} else {
		msg.innerHTML = `Agora são ${hora} horas`
		img.src = './images/fotonoite.png'
		document.body.style.background = '#013d4a'
	}

}
