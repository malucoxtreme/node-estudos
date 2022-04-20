const express = require('express')
app = express()
const port = 8080
const basePath = require('path').join(__dirname, 'templates')

const checkAuth = (req, res, next) =>{ // declaro uma variável que recebe uma função anonima
  req.authStatus = true  // e tem como parametros a requisição, a resposta e o next 
  //atribuimos uma respota ao req.authStatus só para fins de teste
  if(req.authStatus){
    console.log('Auth OK') // se o req.authStatus for true, imprime Auth OK
    next() //o next é chamado para que a requisição seja continuada
  } else {
    console.log('Auth Fail')
  }
}   

app.use(checkAuth)// esse metódo é chamado para todas as requisições
// e também inicia o middleware.

app.get('/',(req,res)=>{
  res.sendFile(`${basePath}/index.html`)
}).listen(port,()=>{
  console.log(`Servidor rodando na porta ${port}`)
})
