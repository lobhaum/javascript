/**
 * Escreva um programa que faça 7 chamadas a console.log()
 * e retorne
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 **/
/**
 * Comentando a resolução do exercício:
for( let i = 0, hash = '#'; i <= 7; i++){
    console.log(hash)
    hash    += '#'
}
 **/

//let i = '#' //definindo a variavel i recebendo #
//i += i      // fazendo com que i receba seu valor + ele mesmo, tornando ele igua a ##
//i += i      // antes i era igual a ## agora i foi para ####
// let i = '#'  definindo i fora do for ele começa com dois # de exibição
for(let c = 0, i = '#'/*definindo i dentro do escopo de for tb começa com ## na ixibição*/; c <= 7; c++){
    //escopando i fora do for
    //let i = '#' removendo i dedentro do for
    // i += i = desta forma i recebe sempre o i anterior, dobrando ele mesmo.
    // quando eu falo que i recebe o valor de i mais '#', não dobro o i, apenas
    // coloco o valor atual de i + 1#
    console.log(i)
    i += '#'
    // console.log(i) -> colocando console.log antes de modificar o i ele mostrará o valor inicial de i que é igual a 1#
}
