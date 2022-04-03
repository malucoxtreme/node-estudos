const fs = require('fs') //fs = file system
console.log('inicio')

fs.writeFileSync('arquivo.php', 'teste')
// fs.writeFile um metódo que força o cogido a esperar sua execução
// para executar a proxima linha de codigo.
console.log('fim')





//geralmente em js, temos duas opções de execução de codigo
//syncrono e assincrono.
//syncrono: executa o codigo de forma sincrona, ou seja,
//executa todo o codigo e depois vai para a proxima linha.
//assincrono: executa o codigo de forma assincrona, ou seja,
//o codigo continua progredindo e obtem a resposta em um ponto futuro.