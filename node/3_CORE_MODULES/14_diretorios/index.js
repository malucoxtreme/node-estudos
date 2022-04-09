const fs = require('fs')
const inquirer = require('inquirer')

if (!fs.existsSync('./minhapasta')){
  console.log('Diretório não existe , criando')
  fs.mkdirSync('minhapasta')
  console.log('Diretório criado com sucesso')
  } else if (fs.existsSync('./minhapasta')){
    console.log('Diretório já existe')
    inquirer.prompt([
      {
        name: 'del',
        message: 'Deseja apagar o diretório?',
        
      }
    ]).then((reposta) => {
        if (reposta.del === 'Y' || reposta.del === 'y'){
            fs.rmdirSync('minhapasta')
            if (!fs.existsSync('./minhapasta'))
            console.log('Diretório apagado com sucesso')
          } else if (reposta.del === 'N' || reposta.del === 'n'){
            console.log('Diretório não apagado')
          }
      })
  }
  


//quando trabalhar com modulo fs
//sempre lembra do sync e do async.
///o metodo exists verifica se um arquivo ou diretório existe
//o metodo mkdirSync cria um diretório
//o metodo rmdirSync remove um diretório
//o metodo readdirSync lê um diretório
//o metodo readFileSync lê um arquivo 
//o metodo writeFileSync escreve um arquivo
//o metodo appendFileSync escreve em um arquivo
//o metodo unlinkSync remove um arquivo
//o metodo renameSync renomeia um arquivo
//o metodo statSync retorna informações de 
//um arquivo ou diretório


