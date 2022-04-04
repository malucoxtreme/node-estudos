//primeiro detalhe da função import e export
//prestar atenção na sintaxe 
//pois precisamos declarar uma função
//difente da require, que usa o module.export 
//extensão do arquivo .mjs
function add(a, b ){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        console.log(a + b)
        console.log('parabens')
    }else{
        throw new Error('só inteiros')  
    }
}
export default add;
//usando o comando export default variável para podermos exportar
//a nossa função.
