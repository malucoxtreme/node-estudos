const myModule = require('./meu_modulo')
//declaramos uma constante quê nela é atribuida um objeto
//esse objeto é o metodo require que carrega um modulo
//e como parametro colocamos a localização do arquivo
const add = myModule.soma
//aqui declaramos outra constante atribuindo 
// a constante onde chamamos require do nosso modulo
//e utilizando o metodo que declaramos dentro do
//comando modulo.exports

add(null, null)
add(5,10)

//testes