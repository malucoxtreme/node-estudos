//externo
const minimist = require('minimist')
//como convenção criaremos sempre uma constante com
//o mesmo nome do modulo, tanto faz ser interno, externo ou core.

//interno
const soma = require('./soma').soma
//prestar atenção que aqui colocamos o path do arquivo com
//o modulo interno
const args = minimist(process.argv.slice(2))

const a = parseInt(args['x'])
//metod parseInt utilizado para converter strings em numeros inteiros
const b = parseInt(args['y'])

soma(a, b)

