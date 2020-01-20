// n! = n * (n-1) * (n-2) * ... * 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Sendo que 1! e 0! são iguais a 1

/*
 * Algoritmo "Recursividade - Fatorial"
 * Lógica de Programação e Estruturas de Dados
 * Var
 * valor:inteiro
 * funcao fatorial(x:inteiro) : inteiro
 * var
 * inicio
 *  se x <= 1 então
 *      retorne 1
 *  senao
 *      retorne x * fatorial (x-1)
 *  fimse
 *fimfuncao
 *Inicio
 *escreva("entre com um numero:")
 *leia(valor)
 *escreva1("Fatorial: ", fatorial(valor))
 *Fimalgoritmo
 */
function fatorial(x){
    if( x <= 1){
        return 1
    }else{
        console.log(x)
        return x * fatorial (x - 1)
    }
}
console.log(fatorial(5))
