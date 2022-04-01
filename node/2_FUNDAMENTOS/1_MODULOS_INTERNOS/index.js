const myModule = require('./meu_modulo')
//declaramos uma constante quê nela é atribuida um objeto
//esse objeto é o metodo require que carrega um modulo
//e como parametro colocamos a localização do arquivo
const add = myModule.soma
//aqui declaramos outra constante atribuindo 
// a constante onde demos require no nosso modulo
//e chamando o metodo que declaramos dentro do
//comando modulo.exports

add(2,3)
add(5,10)

//testes