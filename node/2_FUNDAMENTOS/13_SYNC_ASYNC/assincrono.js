const fS = require('fs')

console.log('inicio')
//metodo writeFile, que é um metodo do core module fs
//e recebe como parametro o nome do arquivo,
//e o conteudo do arquivo, e uma função de callback
//que é executada quando o arquivo for criado.
fS.writeFile('arquivo.txt', 'teste', err => {
    setTimeout(err => {
      console.log('Arquivo criado com sucesso!')
    }, 2000) //tempo de execução do arquivo 
  })
console.log('fim')
//o arquivo.txt será criado depois de 2 segundos.
//de forma assincrona. o node vai executando o codigo
//e esperando a resposta do arquivo.txt.





//geralmente em js, temos duas opções de execução de codigo
//syncrono e assincrono.
//syncrono: executa o codigo de forma sincrona, ou seja,
//executa todo o codigo e depois vai para a proxima linha.
//assincrono: executa o codigo de forma assincrona, ou seja,
//o codigo continua progredindo e obtem a resposta em um ponto futuro.