const http = require('http')
const fs = require('fs')
const { url } = require('inspector')

const port = 80

http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name
  if(!name){
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
  })
  } else {
    fs.writeFile('arquivo.txt', name, function (err, data) {
      fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        console.log('Arquivo criado com sucesso')
        return res.end()
      })
    })
  }
  
}).listen(port, () => {
  console.log(`servidor na porta ${port}`)
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
