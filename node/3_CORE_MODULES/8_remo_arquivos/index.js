const fs = require('fs')

fs.unlink('arquivo.txt', (err) => {
  if (!err) {
  console.log('Arquivo removido com sucesso!')
  } else {
    console.log('Arquivo não existe!: '+ err)
  }
})
// err é uma variável que recebe o erro caso ocorra algum erro.
// se não houver erro, ela fica undefined ou vazia.
// se houver erro, ela recebe o erro.
// metodo unlink() remove o arquivo.