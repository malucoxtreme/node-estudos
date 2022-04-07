const http = require('http')


const port = 80

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  let name = urlInfo.query.name
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  if(!name){
      res.end('<h1>Escreva seu nome</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"></form>')
  }/* else if(!isNaN(name)){
      res.end('<h1>Escreva seu nome</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"></form>')

  }*/ else {  
      
      res.end(`<h1>Bem vindo ${name}</h1>`)
  }
})

server.listen(port, () => {
  console.log(`servidor na porta ${port}`)
})

//tags aprendidas hoje:
//<h1></h1> - tag de titulo
//<form method="GET"></form> - formulario
//<input type="text" name="name"/> - input de texto
//<input type="submit" value="enviar"> - botao de enviar