const chalk = require('chalk');
const nota = 8

if(nota >= 7){
//para lembrar formas intercabiaveis
  console.log(chalk.green.bold(`Sua nota é ${nota}, aprovado.`, ))
} else { //posso concatenar metodo como abaixo
  //fazendo o modulo chalk, ter uma cor de fundo vermelha
  //e a fonte da cor preta
  console.log(chalk.bgRed.black(`Sua nota è ${nota}, Reprovado.`))
}
