const chalk = require('chalk')
const inquirer = require('inquirer')
//como é de praxe quando vai se usar um modulo.
//não esquecer que inquirer é um modulo e é utilizado com o metodo .prompt
//quê recebe um array de objetos, onde os blocos 
//de codigo estão com paramentros delimitados ao modulo e 
//método inquirer.prompt 
//'name:' para o nome do objeto e 'message:' para a mensagem do objeto.

inquirer.prompt([
  {
  name: 'p1',
  message: 'Como você se chama seu filho da puta?',
  },
  {
    name: 'p2',
    message: 'Qual a sua idade?',
  },
]).then(answers => {
  const idade = parseInt(answers.p2)
  //parseInt() converte a string em um número inteiro
  //e retorna um erro caso seja uma string vazia ou não seja um número inteiro
  if (!answers.p1 || !Number.isInteger(idade)  ) {
    throw new Error('Você não pode ser um filho da puta')
  }
  console.log(chalk.black.bgYellow(`${answers.p1} tem ${answers.p2} anos`))
  }).catch((error) => console.log(error))
  //lembrando que podemos concatenar metodos como .prompt(), .then() e .catch()
  //o metodo .catch() não é necessáriamente depedente do try()
  //como eu achei que fosse,mas é mais indicado para tratar erros.
  //o metodo .prompt() é utilizado para pedir ao usuário.
  //o metodo .then() é utilizado para tratar a resposta do usuário.
  //o && é o operador lógico e, o || é o operador lógico ou.
  //o ! é o operador lógico negação.
  //trow é um método do js que lança um erro.
  //sintaxe throw new Error('mensagem de erro')
  //usamos depois com console.log(error.message)
  //para exibir a mensagem de erro.
  //ou com console.log(error) que mostra o objeto do erro.



