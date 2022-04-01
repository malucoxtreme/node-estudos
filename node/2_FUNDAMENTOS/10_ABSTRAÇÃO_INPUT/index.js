const inquirer = require('inquirer')
//como é de praxe quando vai se usar um modulo

inquirer.prompt([//abre array
  {
    name: 'p1',// só posso concluir que o comando 'name:' atribui um nome
    //a este objeto do array no metodo prompt
    message: 'qual a primeira nota?',
  },// primeiro bloco de codigo do array
  {
    name: 'p2',
    message: 'qual a segunda nota?',
  },
]).then((answers) => {
     const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
  //declaramos uma variável para poder tornar nossas strings em inteiros 
  //percebe tambem que o metodo .prompt trabalha como arrays onde os blocos
  //de codigos estão e com paramentros delimitados ao comonado do modulo
  //inquirer, parseInt comando para receber uma string e torna ela um inteiro
  //para acessar os objetos do array usamos nome da variavel.nomedoobejeto .
    console.log(`sua média é ${media}`)
}).catch((err) => console.log(err))

//só para não esquecer modulo.função({
// argumentos que podem ser um bloco de codigo
//}).metodo(paramentros do metodo)
//os arrays [] tambem pode ter bloco de codicos {}
//tentei da uma brincada aqui mas não consegui
//