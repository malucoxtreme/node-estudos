//função console tem varias metodos um deles é o .log() usando para printar
//informações na tela.
const x = 10
const y = 'Contagem'
const z = [1, 2]
//aqui imprimos mais de um valor, concatenando variaveis e strings
//separados por ','.
console.log(y, z)

//contagem de impressões
//intessante para ser usado em loops.
console.log('o valor de x é ', x)
console.log("o valor de x é %s, daqui é linguiça.", x)
console.count(`o valor de x é: ${x} Contagem`)
console.count(`o valor de x é: ${x} Contagem`)
console.count(`o valor de x é: ${x} Contagem`)
console.count(`o valor de x é: ${x} Contagem`)
//metodo console.count, utilizado para contar o numeros de impressões
// variavel entre string com o ponteiro '%s'
console.log('nome é %s, ele é programador', y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000)
//setTimeout():função que após um tempo declarado em 'ms' ele executa
//um bloco de codigo, e aqui vemos um outro metódo da função console
//.clear() utilizado para limpar o console