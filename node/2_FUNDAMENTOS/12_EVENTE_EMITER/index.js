const EventEmitter = require('events')
const eventEmitter = new EventEmitter()//da uma olhada sobre o comando 'news'
//chamamos o core module EventEmitter 'events'
//estanciamos ele numa várivarel 
eventEmitter.on('start', () => {
  console.log('durante')
})
//aqui agora com a gente criar um evento com o metodo 
//variaval.on('nome do evento'), variavel onde estanciamos o modulo
//e com uma arros function, criamos o bloco de codigo do evento
console.log('antes')

eventEmitter.emit('start')
//nesse caso com o metodo variavel.emit('nome do evento')
//emitimos o evento, em outra palavas mandamos ele ser executado
//mas ao fim desse evento, o programa continua daqui.

console.log('depois')

//verificando que o codigo é sempre exevutado 
//de baixo para cima.