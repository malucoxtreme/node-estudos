const inquirer = require('inquirer')
//como é de praxe quando vai se usar um modulo.

inquirer.prompt([//abre array
  {
    name: 'p1',// só posso concluir que o comando 'name:' atribui um nome
    //a este objeto do array no metodo prompt
    //e era isso mesmo kkk
    message: 'qual a primeira nota?',
  },// primeiro bloco de codigo do array
  {
    name: 'p2',
    message: 'qual a segunda nota?',
  },
]).then((answers) => {
  //aqui declaramos uma varivavel para poder armazenar o dados
  //que foram digitados pelo usuário.
     const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
  //Declaramos uma variável para tornar nossas strings em inteiros 
  // parseInt comando para receber uma string e torna ela um inteiro.
  //percebo também que o metódo .prompt trabalha com arrays onde os blocos
  //de codigos estão com paramentros delimitados ao modulo inquirer.
  //para acessar os objetos do array usamos variavelName.objectName .
    console.log(`sua média é ${media}`)
}).catch((err) => console.log(err))

//só para não esquecer modulo.metodo({
// argumentos que podem ser um bloco de codigo
//}).paramentros(paramentros do metodo)
//os arrays [] tambem pode ter bloco de codicos {}
//tentei da uma brincada aqui mas não consegui
//