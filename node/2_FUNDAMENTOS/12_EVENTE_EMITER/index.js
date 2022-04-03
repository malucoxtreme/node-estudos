//chamamos o core module EventEmitter 'events'
const EventEmitter = require('events')
//core module 'events' para o EventEmitter.
const eventEmitter = new EventEmitter()//da uma olhada sobre o comando 'news'
//estanciamos ele numa várivarel 
eventEmitter.on('start', () => {
  console.log('durante')
})
//aqui agora criaremos um evento com o metódo 
//variavel.on('nome do evento'), variavél onde estanciamos o modulo
//e com uma arow function, criamos o bloco de codigo do evento
console.log('antes')

eventEmitter.emit('start')
//nesse caso com o metodo variavel.emit('nome do evento')
//emitimos o evento, em outra palavas mandamos ele ser executado
//mas ao fim desse evento, o programa continua daqui.

console.log('depois')

//verificando que o codigo é sempre exedutado 
//de baixo para cima.
//de baixo para cima.