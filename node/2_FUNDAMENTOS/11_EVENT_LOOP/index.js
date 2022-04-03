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

//uma aula simples para ficar atento para não criar loop infinitos
//e de quebra aprender como declarar e chamar funções.
//percebemos aqui que a interpretação do codigo e de cima para baixo
//o event loop é o responsavel por fazer o controle de execução
//de funções. garantindo que seja executado em ordem correta.
