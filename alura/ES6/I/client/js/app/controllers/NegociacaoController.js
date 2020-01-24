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
        // let data = new Date(
        //     // this._inputData.value.replace(/-/g,',')
        //     ...this._inputData.value
        //         .split('-')
        //         .map(function (item, indice) {
        //             if (indice == 1) {
        //                 return item - 1
        //             }
        //             return item
        //         })
        // )
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        )
        //console.log(data)
        let negociacao = new Negociacao(
            //this._inputData.value,
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao)
    }
}