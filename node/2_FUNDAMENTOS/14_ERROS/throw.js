const x = '10'; 
//throw é um método do js, que lança um erro. e encerrar o executação do código.
//sintaxe throw new Error('mensagem de erro')
  if(!Number.isInteger(x)){
  throw new Error(`valor de x não é um número inteiro`)
} 
//o metodo isInteger() verifica se o valor é um número inteiro
console.log(x)




/* devaneios loucos a me torturar

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
let x 
readline.question('Digite um numero inteiro', (x) => {
  readline.close()
  if(!Number.isInteger(x)){
  throw new Error(`${x} não é um número inteiro`)
} 
})
//o metodo isInteger() verifica se o valor é um número inteiro
console.log(x)*/