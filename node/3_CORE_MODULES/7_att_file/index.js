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
    fs.appendFile('arquivo.txt', name + '\r\n', function (err, data) {
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
o metodo appendFile() adiciona conteudo ao arquivo, 
caso o arquivo não exista ele será criado, diferente do metodo writeFile()
que sobrescreve o conteudo do arquivo.
praticamente a unica diferença no codigo é a linha que que escreve
o conteudo no arquivo, e uma expressão que adicionar uma quebra de linha.
*/
