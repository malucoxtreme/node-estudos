//aqui aprendemos como chamar um modulo
//nesse caso é o um 'core' modulo do nodejs 'file system'
//chamado para ler arquivos
const fs = require('fs')
//comando const atribuir uma constante

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
// chamando o fs com o paramentro "readFile" do modulo file system
//paramentos auto explicaveis exceto o (err, data)
//sendo usado principalmente para encontrar erros
    if(err){
        
        console.log(err)
        return
    }
  console.log(data)  
})