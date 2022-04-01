//primeiro detalhe da função import e export
//prestar atenção na sintaxe 
//pois precisamos declarar uma função
//difente da require, que usa o module.export 
//extensão do arquivo .mjs
function add(a, b){
       console.log(a + b)
       console.log('parabens')
   }
export default add;
//usando o comando export defaul variavel para podermos exporta a função
