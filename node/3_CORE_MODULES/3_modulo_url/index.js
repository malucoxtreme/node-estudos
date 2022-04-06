const { get } = require('http')
const url = require('url')
const adrress = 'https://www.meusite.com.br/catalog?p=cadeira'
const parsedUrl = new url.URL(adrress)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('p'))

//estamos agora trabalhando com url's usando modulo url
//aqui o metodo parsedUrl para resgastar o certas partes
//.host é o nome do site
//.pathname é a pagina onde está
//.search é o que está sendo buscado nessa pagina
//.searchParams é o parametro de busca
//.get é o metodo para pegar o parametro de busca para extarir 
//o valor do parametro.
