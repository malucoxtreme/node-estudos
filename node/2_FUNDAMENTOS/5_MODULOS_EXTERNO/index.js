//estamos usando um pacote 'minimist' que nos ajuda a trabalhar com argumentos
//tornando a sintaxe mais enchuta e limpa começamos 
//declarando uma variável com  o metodo require e dando como argu minimist
//evitando trecho de codigo como 'const variavel = args [1].split('=')[1]'
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2));
//process.argv é um metodo que captura os argumentos em arrays e
//tendo como primeiro obejto o nodejs path e o segundo o arquivo .js
//nesse caso usamos o metodo .slice para capturarmos a partir do 3 objeto no
//indce 2, o slice fornece uma copia rasa de determinado array a partir de certo
//indice.
console.log(argv)
const a = argv['nome']
const b = argv['profi']
//o metodo argv['argumento'] aqui foi usado para usar um argumento especificado
//ao invés o nome da váriavel.

console.log(`o nome desse degraçado é ${a} e a profissão é ${b}.`);
