class DateHelper{
    constructor(){
        throw new Error('DateHelper não pode ser instanciado');
    }
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Formato aaaa-mm-dd encontrado não encontrado');
        }
        return new Date(...texto.split('-').map(item, indice) => item - indice %2));
    }
}