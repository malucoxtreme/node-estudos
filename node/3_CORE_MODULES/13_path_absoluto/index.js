const path = require('path')

// Retorna o caminho absoluto
console.log(path.resolve('teste.txt'))

const midFolder = 'node-estudos'
const fileName = 'teste.txt'
// Formar um caminho relativo
console.log (path.join("/", 'node', midFolder, fileName))