const x = 20

try {
  x = 20
} catch (ex) {// o catch trata erros, ele mesmo os aloca em uma variável
  console.log(`tivemos um erro!\n ${ex}\n`)
} finally {
  console.log(x)
}
//try é um comando do js, que tenta executar um código, 
//e se der erro, ele vai executar o catch.
//e tendo como opcional o finally, que é executado sempre, 
//independente de ter ou não o erro.
//podemos também passar um parâmetro para o catch, que é o erro.
//e usar o console.log para mostrar o erro.