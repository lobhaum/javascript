

/**
 * Captura do botão do formulário
 */
// armazendo botao na variavel b
let b = document.querySelector("#botao");
// ouvindo o click de b
b.addEventListener("click", function(event){
    // prevendo reload da pagina ao clicar o botão
    event.preventDefault();
    // pega os dados do formulário
    let dados = getData();
    let churrasco = calculaChurrasco(dados);    

    //debug
    console.log("cliquei no botao")
    console.log(dados)
    console.log(churrasco)
})
/**
 * Captura dos dados do formulário
 */
function getData(){
    let retorno = {
        "pessoas": document.querySelector("#pessoas").value,
        "horas": document.querySelector("#horas").value
    }
    return retorno;
}
/**
 * Calculando churrasco
 */
//calculando churrasco
    /**
     * 1 pessoa consome 300g carne por h
     * come 3 pães
     * toma 4 latinhas de cerveja
     * toma 200ml de refrigerante
     */
    function calculaChurrasco(dados){
        const carne = 300
        const paes = 3
        const cerveja = 4
        const refrigerante = 200

        let churrasco = {
            "totalCarne": carne * dados.pessoas * dados.horas,
            "totalPaes": paes * dados.pessoas * dados.horas,
            "totalCerveja": cerveja * dados.pessoas * dados.horas,
            "totalRefrigerante": refrigerante * dados.pessoas * dados.horas
        }

        return churrasco;
    }