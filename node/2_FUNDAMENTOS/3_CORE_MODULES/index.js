//os cores modulos são modulos integrados ao node.js
//uma constante é declarada com um require usando o mesmo nome do modulo

const path = require('path')
//com essa constante usando um objeto com o modulo 
//importado path usando require.
//esse metodo serve para capturar a extensão do arquivo
const extension = path.extname('arquivo.php')

console.log(extension)
