//Módulo coremodule readline para ler entrada de usuários
//padrão é criar uma variável como o nome do modulo
//podemos usar as funções a medida que importamos assim como podemos
//importa-las isoladamente:
//veja o examplo abaixo onde usamos a função
//createInterface para criar uma interface de entrada de dados.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
//já concantenemos a variavél com o metodo do modulo readline .createInterface()
//porem é possivel declarar outra variavel apenas para conter esse metódo
//exemplo:
//const exemplo = readline.createInterface({
//  input: porcess.stdin,
//  output: process.stdout,
//})
//sendo o input argumentos de entrada e o output argumentos de saída
//declarada assim que chamamos o metodo readline.createInterface({argumentos})
readline.question('qual a sua linguagem preferida?', (language) =>{
  console.log(`A minha linguagem preferida é: ${language} `)
  readline.close()
})
//readline.question() printa uma pergunta, e salva numa variavel
// => = arrow e nesse caso é uma arrow function
//uma especie de função simplificada em sitaxe e de escopo definido
//no caso o escopo dela está como paramentro de readline.question()
//finalizando com readline.close().
//preciso  estudar mais sobre o js puro mas acredito que language é
//a variavel que recebe o valor da pergunta, ou o objeto que recebe o valor.
