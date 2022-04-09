const path = require('path')
const url = require('url')

const customPath = 'c:/teste/teste.txt'
const pathsu = url.parse(customPath, true).path.substring(-2)

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))
console.log(pathsu)