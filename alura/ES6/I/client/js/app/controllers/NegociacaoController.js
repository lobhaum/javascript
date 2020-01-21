class NegociacaoController {

    constructor() {
        // let inputData = document.querySelector('#data')
        // let inputQuantidade = document.querySelector('#quantidade')
        // let inputValor = document.querySelector('#valor')
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault(); // Cancela a submissão do formulario
        //alert('Chamei acao no controller')
        // console.log(this._inputData.value)
        // console.log(this._inputQuantidade.value)
        // console.log(this._inputValor.value)
        // console.log(typeof(this._inputData.value))
        // let data = new Date(this._inputData.value.split('-'))
        let data = new Date(this._inputData.value.replace(/-/g,','))
        console.log(this._inputData.value)
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao)
    }
}