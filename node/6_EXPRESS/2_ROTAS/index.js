const express = require('express')// modulo express 
//const app = express() eu gosto de chamar a função junto com o codigo
//quando sei que não ou usar a variavel váris vezes 
const port = 8080 //variavel para poder armazenar a porta que o servidor vai rodar
//nem sempre é necessário podemos setar dirto no metodo listen(port, callback)
express().get('/',(req,res)=>{
  res.send('<h1>Home</h1>')
}).listen(port,()=>{
  console.log(`Servidor rodando na porta ${port}`)
})