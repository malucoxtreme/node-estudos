const fS = require('fs')

console.log('inicio')

fS.writeFile('arquivo.txt', 'teste', function(err, result){null})
console.log('fim')