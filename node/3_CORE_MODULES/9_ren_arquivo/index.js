const fs = require('fs')

const arquivo = 'arquivo.txt'
const arquinovo = 'arquivo_novo.txt'

fs.rename(arquivo, arquinovo, (err) => {
  if (!err) {
  console.log(`Arquivo ${arquivo} renomeado para ${arquinovo} !`)
  } else {
    console.log(`${arquivo} não existe!: `+ err)
  }
})

/*
o metódo rename() altera o nome do arquivo.
utilizar variáveis para não ficar escrevendo o nome do arquivo
deixa o código mais dinamico e podemos trabalhar com entradas de dados
*/