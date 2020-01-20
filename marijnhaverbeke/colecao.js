let dia1 = {
    esquilo: false,
    eventos: ['trabalho','arvore','pizza','correr','televisao' ]
}
console.log(dia1.esquilo)
console.log(dia1.lobo)
dia1.wolf = false
console.log(dia1.wolf)
let descricao = {
    trabalho: true,
    arvore: true,
    pizza: true,
    correr: true,
    televisao: false

}
console.log(descricao.arvore)


let objeto = {
    esquerda: 1,
    direita:2
}
delete objeto.esquerda
console.log(objeto.esquerda)
console.log('esquerda' in objeto)
console.log('direita' in objeto)
console.log('Coleção do Esquilo-Lobo:')
let journal = [
    {
        events: [
            'trabalhou',
            'encostou na árvore',
            'comeu pizza',
            'correu',
            'assistiu tv'
        ],
        esquilo: false
    },
    {
        events: [
            'trabalhou',
            'tomou sorvete',
            'cheirou planta',
            'comeu lasanha',
            'encostou na árvore',
            'escovou os dentes'
        ],
        esquilo: false
    },
    {
        events: [
            'final de semana',
            'pedalou',
            'parou',
            'amendoins',
            'cerveja'

        ],
        esquilo: true
    }
]

console.log(journal[2])
