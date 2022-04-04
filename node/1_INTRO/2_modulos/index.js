//aqui aprendemos como chamar um modulo
//nesse caso é o um 'core' modulo do nodejs 'file system'
//chamado para tratar arquivos e diretórios...
const fs = require('fs')
//comando const atribuir uma constante
//por convenção, o modulo deve ser atribuido a uma constante de mesmo nome
//como no caso do modulo fs, ou seja, fs.

fs.readFile('arquivo1.txt', 'utf8', (err, data) => {
// chamando o fs com o paramentro "readFile" do modulo file system
//paramentos auto explicaveis exceto o (err, data)
//sendo o primeiro usado principalmente para encontrar erros.
//e o segundo para armazenar o conteúdo do arquivo.
//o comando return vazio é usado para finalizar a função, 
//e não retornar nada
// no entanto, o comando return com um valor é usado para retornar um valor
//após a execução da função.
const msg = 'Erro ao ler o arquivo'
    if(err => {
        
        console.log(err)
        return (msg)
    })
  console.log(msg)  
})