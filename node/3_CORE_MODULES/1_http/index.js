const http = require('http')
const inquirer = require('inquirer')

const port = 3000

inquirer.prompt([
  {name: 'p1', message: 'porta do servidor: '},]).then((answers) => {

  const server = http.createServer((req, res) => {
    res.write('Hello World') 
    res.end('és finito')
  })
  let port = parseInt(answers.p1)
  
 
  if(port >= 1 && port <= 65536 ){
      server.listen(port, () => {
      console.log(`servidor na porta ${port}`)}) 
    } else if(port < 1 || port > 65536){
      console.log('A porta deve ser um número entre 1 e 65536')
    } else {
      console.log('A porta é inválida')
    }
  }).catch((error) => {console.log(error)})

    


//core module http utilizado para criar um servidor web
//const url = require('http')
//var port //porta que o servidor vai escutar
//com o metodo createServer() criamos um servidor web
//(req, res) req de requisição e res de resposta
//nesse momento usamos apenas o 'res' para enviar uma resposta
//res.write('') escreve algo na tela
//res.end('') finaliza a resposta
/*function lispor(){
if(!Number.isInteger(port)){
    server.listen(port, () => {
    console.log(`servidor na porta ${port}`)}) 
  } else {
    console.log('porta invalida')
    lispor()}
}*/
/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
//var por
readline.question('Porta do servidor: ', (port) => {
  function lispor(){
    if(!Number.isInteger(port)){
        server.listen(port, () => {
        console.log(`servidor na porta ${port}`)}) 
      } else {
        console.log('porta invalida')
        lispor()}
    }
  console.log(port)
  sthttp()
})

//server.listen(port) escuta a porta 3000
//usando o metodo listen() do modulo http
//e criamos o servidor na constante server*/
//meu programa está cheio de condigo assim por causa que
//eu estou testando várias possibilidades

/*
explicando rapidamente o que está acontecendo:
ele está iniciando o servidor web, e utilizando modulo 
inquirer para pedir a porta do servidor ao usuario
verificando se não foi deixado vazio ou se foi digitado
uma porta inválida. 
*/
