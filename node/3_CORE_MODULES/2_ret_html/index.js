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