
module.exports = {
     soma(a, b){ //comporta-se como um metodo do meu modulo
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
        //if (typeof a === 'string' || typeof b === 'string') 
        //typeof checa se o tipo do valor é string nesse caso
        //mas o typeof não checa se estará vazio.
        //isInteger() checa se o valor é um número inteiro e se está vazio.
            console.log('Só aceita números')
        } else {
        console.log(a + b)
        }
    }
}

//modulo interno o metodo module.exports 
//exporta uma função ou bloco de codigo reaproveitavél
//nesse metodo o arquivo precisa ser com a extensão .js


