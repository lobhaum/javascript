/*
 * Módulo estrutura de dados
 * @MarinHaverbeke
 * http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/
 * Refazendo o módulo 
 * Data: 16/08/2019
 * Início: 4:38
 */


// Como representar a **Coleção** de números: 2, 3, 5, 7 e 11
let lista = [2, 3, 5, 7, 11]
console.log(lista)
function bar() {
    console.log('-----------------------------------------------------------------')
}
bar()
let doh = 'Homer Simpson'
console.log(typeof doh.toUpperCase)
console.log(doh.toUpperCase())
bar()
let musica = []
musica.push('One Bourbon') // método push acrescenta item no final do array
musica.push('One Scoch')
musica.push('One Beer')
console.log(musica)
console.log(musica.join(' '))
console.log(musica.pop()) // método pop exclui item no final do array
console.log(musica)
bar()
let dia0 = {
    esquilo: false,
    eventos: ['trabalho', 'árvore', 'pizza', 'correr', 'televisao']
}
console.log('Tivemos esquilo: ' + dia0.esquilo)
console.log('Tivemos lobo: ' + dia0.wolf)
dia0.lobo = false; // Adicionando propriedade lobo e valor falso
console.log('Forçando verificação de lobo: ' + dia0.lobo)
bar()
let objeto = {
    esquerda: 1,
    direita: 2
}
console.log('Valor de esquerda: ' + objeto.esquerda)
delete objeto.esquerda
console.log('Valor de esquerda: ' + objeto.esquerda)
console.log('Tem esquerda: ')
console.log('esquerda' in objeto)
console.log('Tem direita: ')
console.log('direita' in objeto)
bar()
let journal = [
    {
        eventos: ['trabalho', 'arvore', 'pizza', 'correr', 'televisao'],
        esquilo: false
    },
    { eventos: ['trabalho', 'sorvete', 'couve-flor', 'lasanha', 'arvore', 'escovou dentes'], esquilo: false },
    {
        eventos: ['final de semana', 'pedalou', 'descansou', 'amendoim', 'cerveja'],
        esquilo: true
    }
]
console.log(journal)
bar()
let objeto1 = { value: 10 }
let objeto2 = objeto1
let objeto3 = { value: 10 }
console.log('Objeto1 e objeto2 são iguais?')
console.log(objeto1 == objeto2)
console.log('Objeto1 e objeto3 são iguais?')
console.log(objeto1 == objeto3)
objeto1.value = 15 // acessando o item value de objeto1 e trocando o valor dele para 15
console.log('Qual o valor de objeto1 depois de receber 15?')
console.log(objeto1.value)
console.log('Qual o valor de objeto2 agora?')
console.log(objeto2.value)
console.log('Qual o valor de objeto3 neste momento?')
console.log(objeto3.value)
bar()
/*
 * Inicio da saga do weresquirrel
 */
let diario = [] //reservei na memória espaço para o array diário (alocação de memória)
function escrever(x, y) { //aqui defini duas variaveis originalmente como eventos e esquilo, estou substituindo-as por eventos->x e esquilo->y, para ficar facil a pesquisa no futuro da relação entre os eventos e seu preenchimento através das variáveis.
    diario.push({
        eventos: x,// todo valor que eu digitar primeiramente entrará em eventos por causa da posição do x 
        esquilo: y //todo valor que eu digitar depois da virgula principal, entrará em esquilo devido a posição do y.
        // caso eu invertesse as posições, obrigatoriamente  o preenchimento seriam invertido
    })
}
escrever(['trabalho', 'arvore', 'pizza', 'correr'], false) // Desta forma, definindo evento e equilo, suprimo a formatação repetindo os eventos aqui.
escrever(['trabalho', 'sorvete', 'couve-flor', 'lasanha'], false)
escrever(['final de semana', 'pedalar', 'descanso', 'amendoim', 'cerveja'], true)
console.log(diario)
/*
 * Iniciando o primeiro script para calculo, temos que chegar em ≃ 0,069
 */
// criando array:
// testes com array, cima,baixo e conta chegaram no resultado esperado.
// vou transformar agora em funcção apenas acrescentando os parametros de função
function estatistica() {
    let licantropia = [76, 9, 4, 1]
    console.log(licantropia)
    let cima = licantropia[3] * licantropia[0] - licantropia[2] * licantropia[1]
    let baixo = (licantropia[3] + licantropia[2]) * (licantropia[0] + licantropia[1]) * (licantropia[1] + licantropia[3]) * (licantropia[0] + licantropia[2])
    console.log(cima)
    console.log(baixo)
    let conta = cima / Math.sqrt(baixo)
    return conta //havia esquecido de colocar o return conta, não retornava o resultado para o console.log abaixo, apenas undefinied
}
console.log(estatistica()) // chegamos no resultado esperado
bar()
var JOURNAL = [
  {"eventos":["cenoura","atividade física","final de semana"],"esquilo":false},
  {"eventos":["pão","pudim","escovou os dentes","final de semana","árvore"],"esquilo":false},
  {"eventos":["cenoura","nachos","escovou os dentes","pedalou","final de semana"],"esquilo":false},
  {"eventos":["brussel sprouts","sorvetem","escovou os dentes","computador","final de semana"],"esquilo":false},
  {"eventos":["potatoes","doce","escovou os dentes","atividade física","final de semana","dentist"],"esquilo":false},
  {"eventos":["brussel sprouts","pudim","escovou os dentes","running","final de semana"],"esquilo":false},
  {"eventos":["pizza","escovou os dentes","computador","trabalhou","árvore"],"esquilo":false},
  {"eventos":["pão","beer","escovou os dentes","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["couve-flor","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["pizza","escovou os dentes","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["lasagna","nachos","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["escovou os dentes","final de semana","árvore"],"esquilo":false},
  {"eventos":["alface","escovou os dentes","television","final de semana"],"esquilo":false},
  {"eventos":["spaghetti","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["escovou os dentes","computador","trabalhou"],"esquilo":false},
  {"eventos":["alface","nachos","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["couve-flor","reading","final de semana"],"esquilo":false},
  {"eventos":["pão","escovou os dentes","final de semana"],"esquilo":false},
  {"eventos":["lasagna","escovou os dentes","atividade física","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","escovou os dentes","reading","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","sorvetem","escovou os dentes","television","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","nachos","trabalhou"],"esquilo":false},
  {"eventos":["couve-flor","sorvetem","escovou os dentes","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","amendoim","computador","final de semana"],"esquilo":true},
  {"eventos":["potatoes","sorvetem","escovou os dentes","computador","final de semana"],"esquilo":false},
  {"eventos":["potatoes","sorvetem","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["amendoim","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["potatoes","atividade física","trabalhou"],"esquilo":false},
  {"eventos":["pizza","sorvetem","computador","trabalhou"],"esquilo":false},
  {"eventos":["lasagna","sorvetem","trabalhou"],"esquilo":false},
  {"eventos":["couve-flor","doce","reading","final de semana"],"esquilo":false},
  {"eventos":["lasagna","nachos","escovou os dentes","running","final de semana"],"esquilo":false},
  {"eventos":["potatoes","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","trabalhou"],"esquilo":false},
  {"eventos":["pizza","beer","trabalhou","dentist"],"esquilo":false},
  {"eventos":["lasagna","pudim","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","escovou os dentes","reading","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","pudim","television","final de semana"],"esquilo":false},
  {"eventos":["pão","escovou os dentes","atividade física","final de semana"],"esquilo":false},
  {"eventos":["lasagna","amendoim","trabalhou"],"esquilo":true},
  {"eventos":["pizza","trabalhou"],"esquilo":false},
  {"eventos":["potatoes","atividade física","trabalhou"],"esquilo":false},
  {"eventos":["escovou os dentes","atividade física","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","escovou os dentes","television","trabalhou"],"esquilo":false},
  {"eventos":["pizza","pedalou","final de semana"],"esquilo":false},
  {"eventos":["cenoura","escovou os dentes","final de semana"],"esquilo":false},
  {"eventos":["cenoura","beer","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["pizza","amendoim","doce","trabalhou"],"esquilo":true},
  {"eventos":["cenoura","amendoim","escovou os dentes","reading","trabalhou"],"esquilo":false},
  {"eventos":["potatoes","amendoim","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","nachos","escovou os dentes","atividade física","trabalhou"],"esquilo":false},
  {"eventos":["pizza","amendoim","escovou os dentes","television","final de semana"],"esquilo":false},
  {"eventos":["lasagna","escovou os dentes","pedalou","final de semana"],"esquilo":false},
  {"eventos":["couve-flor","amendoim","escovou os dentes","computador","trabalhou","árvore"],"esquilo":false},
  {"eventos":["alface","escovou os dentes","television","trabalhou"],"esquilo":false},
  {"eventos":["potatoes","escovou os dentes","computador","trabalhou"],"esquilo":false},
  {"eventos":["pão","doce","trabalhou"],"esquilo":false},
  {"eventos":["potatoes","nachos","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","pudim","escovou os dentes","final de semana"],"esquilo":false},
  {"eventos":["cenoura","escovou os dentes","atividade física","final de semana","árvore"],"esquilo":false},
  {"eventos":["brussel sprouts","running","trabalhou"],"esquilo":false},
  {"eventos":["escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["alface","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["doce","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["brussel sprouts","escovou os dentes","computador","trabalhou"],"esquilo":false},
  {"eventos":["pão","escovou os dentes","final de semana"],"esquilo":false},
  {"eventos":["couve-flor","escovou os dentes","final de semana"],"esquilo":false},
  {"eventos":["spaghetti","doce","television","trabalhou","árvore"],"esquilo":false},
  {"eventos":["cenoura","pudim","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["alface","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","sorvetem","escovou os dentes","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["pizza","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["spaghetti","amendoim","atividade física","final de semana"],"esquilo":true},
  {"eventos":["pão","beer","computador","final de semana","árvore"],"esquilo":false},
  {"eventos":["escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["alface","amendoim","escovou os dentes","trabalhou","árvore"],"esquilo":false},
  {"eventos":["lasagna","escovou os dentes","television","trabalhou"],"esquilo":false},
  {"eventos":["couve-flor","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["cenoura","reading","final de semana"],"esquilo":false},
  {"eventos":["cenoura","amendoim","reading","final de semana"],"esquilo":true},
  {"eventos":["potatoes","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["lasagna","sorvetem","trabalhou","árvore"],"esquilo":false},
  {"eventos":["couve-flor","amendoim","escovou os dentes","pedalou","trabalhou"],"esquilo":false},
  {"eventos":["pizza","escovou os dentes","running","trabalhou"],"esquilo":false},
  {"eventos":["alface","escovou os dentes","trabalhou"],"esquilo":false},
  {"eventos":["pão","escovou os dentes","television","final de semana"],"esquilo":false},
  {"eventos":["couve-flor","amendoim","escovou os dentes","final de semana"],"esquilo":false}
];

/*
 * Função temEvento
 * testa se uma entrada contém ou não o evento em questão.
 * Os arrays possuem um método indexOf que porcura o valor informado no array 
 * o nome do evento.
 */
function temEvento(e, n){ //e -> evento n-> entrada
    return n.eventos.indexOf(e) != -1;
}
function tabelando(e,estatistica ){
    let tabela = [0, 0, 0, 0]
    for(let c = 0; c < estatistica.length; c++){
        let n = estatistica[c], index = 0
        if(temEvento(e, n)) index += 1
        if(n.esquilo) index += 2
        tabela[index] += 1
    }
    return tabela
}
console.log(tabelando('pizza', JOURNAL))
console.log(tabelando('árvore', JOURNAL))
bar()
let map = {}
function armazenar(evento, licantropia){
    map[evento] = licantropia
}
const p = Number(0.06859943405700354)
const a = Number(-0.08084520834544433)
armazenar('pizza', p)
armazenar('árvore', a)
console.log('pizza' in map)
console.log('pizza')
console.log(map['árvore'])
for (let evento in map)
    ("A correlação para '" + evento + "' é " + map[evento])
bar()
function pegarCorrelacao(x){
    let map = {}
    for (let entrada = 0; entrada < x.length; entrada++){
        let eventos = x[entrada].eventos;
        for (let i= 0; i < eventos.length; i++){
            let evento = eventos[i]
            if(!(evento in map))
                map[evento] = estatistica(tabelando(evento, x))
        }
    }
    return map
}
let correlacao = pegarCorrelacao(JOURNAL)

console.log(correlacao.pizza)
for (var evento in correlacao){
    let correla = correlacao[evento]
    if(correla > 0.1 || correla < -0.1)
        console.log( evento + ": " + correla)
    }
