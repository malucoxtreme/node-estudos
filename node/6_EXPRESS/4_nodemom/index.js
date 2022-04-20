const express = require('express')
//const app = express()
const port = 8080
const basePath = require('path').join(__dirname, 'templates')
/*
usamos o express para renderizar o html
com o core modulo path, e com o metodo join
setamos um caminho para o diretorio onde estão os arquivos do site e etc
*/
express().get('/',(req,res)=>{
  res.sendFile(`${basePath}/index.html`)
}).listen(port,()=>{
  console.log(`Servidor rodando na porta ${port}`)
})
//express().get metodo para receber e responder requisições
//tal como o http do node, o express também tem o metodo listen
//que recebe o porta e o callback para quando o servidor estiver rodando
//no metodo res.sendFile, passamos o caminho do arquivo que queremos