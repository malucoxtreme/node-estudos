function a(){
  console.log('executando a')
  b()
  c()
}
function b(){
  console.log('executando b')
  
}
function c(){
  console.log('executando c')
  
}
a()

//uma alua simples para ficar atento para não crari loop infinitos
//e de quebra aprender como declarar e chamar funções.
//percebemos aqui que a interpretação do codigo e de cima para baixo
