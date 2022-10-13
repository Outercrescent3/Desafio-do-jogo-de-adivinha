//Meses após ter feito o primeiro script, resolvi fazer um segundo, que é um pouco mais complexo. Aproveitando pra treinar novos conceitos como classes, objetos, funções, etc.
class Jogo_adivinha{
constructor(){
this.sorteado = 0
this.lista = [] // o primeiro número nesse array será o  número sorteado
}
// Fase de verificações 
verifica_N(){  
  var numero = Number(document.getElementById("txtnumero").value);
  if(numero >= 1 &&  numero <= 100){ // Verifica se o número digitado é menor ou igual a 100 ou maior ou igual a 100
    if(this.lista.length <= 10){  // Verifica se já bateu o limite de numeros cadastrados 
      if(this.lista.length == 0){ // Se for a primeira ação do jogo vai chamar o método de gerar numero
         this.gera_numero()
      }
      if(numero === this.sorteado){ // Se o número for igual o numero sorteado vai chamar o método encerra jogo
        alert("Acertou")
        this.encerrajogo()
      }
      if(this.lista.indexOf(numero) === -1){ // Verifica se o número já foi cadastrado 
        if(this.sorteado != 0){ // Medida de segurança para que quando tiver acertado não cadastrar o número
           this.cadastro_numero(numero)
        }
      }else{
        alert('Número existente')
        }
    }else{
      alert('Você perdeu :(')
      encerra_jogo()
      }
  }else{
    alert("Digite um numero valido")
    document.getElementById("txtnumero").value = ''
    }
 }
 gera_numero(){ // Criar o numero aleatorio e manda para o array
  this.sorteado = Math.ceil(Math.random().toFixed(2)*100+1)
 }
 cadastro_numero(numero){ //Cadastra o numero no array e limpa a tela lá no front
  this.lista.push(numero)
  document.getElementById("txtnumero").value = ''
  document.getElementById('res').innerHTML +=  `${numero}, `
  
  this.acertou_ou_nao(numero)
  }
 acertou_ou_nao(numero){
  if(numero < this.sorteado){
    alert("O numero está baixo")
    document.getElementById('txtnumero').focus()
    
  }
  if(numero > this.sorteado){
   alert("O numero está alto")
   document.getElementById('txtnumero').focus()
  }
 }
 encerrajogo(){
  this.lista = []
  this.sorteado = 
  document.getElementById("txtnumero").value = ''
  document.getElementById('res').innerText = ''
  document.getElementById('txtnumero').focus()
 }
}
var jogo_adivinha = new Jogo_adivinha()



