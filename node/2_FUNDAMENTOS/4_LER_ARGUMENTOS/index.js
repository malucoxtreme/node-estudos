// usando argumento
//o node permiti o envio de argumentos atráves da linha de comando.
//passamos esses argumentos após a execução do programa

console.log(process.argv)

//process.argv é um objeto especial do no node do tipo array que não ´
//precisa ser declado em uma constante usando o comando require 
//de forma a está sempre disponivel para o nosso programa,
//no qual podemos resgatar os valores enviado como argumentos.

const args = process.argv.slice(2)

//slice é um método do js que capturar objetos do array
//nesse casos ele tá capturando os valores enviados como argumentos
//no indici 0 até o 2.

console.log(args)
//printando a variavel args

const alcunha = args [0].split('=')[1]
//para capturar o argumento atribuido a variavél args, atruibuimos a uma 
//variável o objeto args com indice do valor referente ao primeiro 
//argumento nesse caso [0] usando o metodo .split() 
//para separar a string em determinado caractere nesse caso é o "="
//e usando o indice do primeiro valor,que nesse caso é o que atribuimos
// após o argumento.

console.log(alcunha)
//printa alcunha

const idade = args [1].split('=')[1]
// mesma lógica com a penas a diferenção que agora o segundo argumento está no
// indicie 1, que nesse caso é so segundo obejto
console.log(idade)

console.log(`Seu nome é ${alcunha}, e sua idade é ${idade}`)