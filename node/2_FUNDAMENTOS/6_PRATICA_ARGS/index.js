//externo
const minimist = require('minimist')
//como convenção criaremos sempre uma constante com
//o mesmo nome do modulo, tanto faz ser interno, externo ou core.

//interno
const soma = require('./soma').soma
//prestar atenção que aqui colocamos o caminho do arquivo com
//o modulo interno
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
//metod parseInt utilizado para converter strings em numeros inteiros
const b = parseInt(args['b'])

soma(a, b)

