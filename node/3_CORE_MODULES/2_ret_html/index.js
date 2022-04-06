const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>Node js server com html</h1><p>testando</p></body></html>') 
})

server.listen(port, () => {
  console.log(`servidor na porta ${port}`)
})

//aqui o programa está retornando um html e um status code 200
// na verade eu não sei quando esse status code vai ser usado
// mas o status code 200 é o padrão para sucesso
//res.setHeader é usado para definir o tipo de conteudo que será enviado
//nesse caso o conteudo será text/html
//res.end é usado para enviar o conteudo