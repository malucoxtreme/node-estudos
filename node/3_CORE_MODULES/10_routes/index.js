//const http = require('http')
const fs = require('fs')
const { url } = require('inspector')

require('http').createServer((req, res) => {
  let htmlFile = require('url').parse(req.url, true).path.substring(1)
  if(htmlFile == ''){
    htmlFile = 'index.html'
   }
  if(htmlFile.includes('html') && fs.existsSync(htmlFile)){
    fs.readFile(htmlFile, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
      })
    } else {
      fs.readFile('404.html', (err, data) => {
      res.writeHead(404, {'Content-Type': 'text/html', 'charset': 'utf-8'})
      res.write(data)
      res.end()})
    }
}).listen(8080, () => {
  console.log(`servidor na porta 80 duas vez`)
})


/* 
dentro do metodo query do url, temos acesso aos parametros passados na url
podendo ser acessado como: urlInfo.query.name, urlInfo.query.age e etc.

usando o metodo writeFile, podemos escrever um arquivo no sistema de 
arquivos do node. 

status code 302, é um status code de redirecionamento, que é usado para
redirecionar o usuario para outra pagina, ou para a mesma pagina.
podendo ser dado como parametro no metodo writeHead, e recebe um objeto
como parametro. {'location': '/'} obs não funcionou como esperado.
emplementei de outra forma.

*/
