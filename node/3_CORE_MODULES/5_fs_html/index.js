const http = require('http')
const fs = require('fs')

const port = 80

const server = http.createServer((req, res) => {
  fs.readFile('mess.html', (err, data) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(data)
  return res.end()
  })
})
/* aqui vimos como chamar um arquivo html
utilizando core module fs, que é um modulo nativo do node
e como o fs.readFile() é uma funcao assincrona,
entao precisamos utilizar o callback para saber quando
o arquivo esta pronto para ser lido.

res.writeHead - define o tipo de conteúdo que será enviado.
res.write - escreve o conteúdo quê nesse caso está armazenado
na variável data que corresponde ao arquivo html.
res.end - finaliza a requisição.
*/

server.listen(port, () => {
  console.log(`servidor na porta ${port}`)
})
