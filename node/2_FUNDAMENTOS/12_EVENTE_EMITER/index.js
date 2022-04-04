//declarar o core module'events' na variável EventEmitter com require
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
//da uma olhada sobre o comando 'new'
//criamos uma variavel e instanciamos ele com o comando new
//e passamos o nome do metodo que queremos usar.
//por convenção o nome da varivel é o nome do modulo, com letra minuscula
//aqui agora criaremos um evento com o metódo .on()
eventEmitter.on('start', () => {
  console.log('durante')
})
//variavel.on('nome do evento'), variavél onde estanciamos o modulo
//e o nome do evento que queremos criar.
//aqui criamos um evento chamado start, que será executado quando o evento
//for emitido, e o bloco de codigo do evento.
console.log('antes')

eventEmitter.emit('start')
//nesse caso com o metodo variavel.emit('nome do evento')
//emitimos o evento, em outra palavas mandamos ele ser executado
//mas ao fim desse evento, o programa continua a partir daqui.

console.log('o programa continua aqui')

//verificando que o codigo é sempre executado 
//de baixo para cima.