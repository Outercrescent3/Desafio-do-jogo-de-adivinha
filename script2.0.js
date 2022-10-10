
/*
Meses após ter feito o primeiro script, resolvi fazer um segundo, que é um pouco mais complexo. Aproveitando pra treinar novos conceitos como classes, objetos, funções, etc.
*/


class Jogo_adivinha{
constructor(){
this.lista = [] // o primeiro número nesse array será o  número sorteado
}
gera_numero(){  // Cria o numero aleatorio e manda para o array
    this.lista.push(Math.ceil(Math.random().toFixed(2)*100+1))
}
verifica_N(){  // Fase de verificações
  var numero = Number(document.getElementById("txtnumero").value);
  if(this.lista.length <= 11){  // Verifica se já bateu o limite de numeros cadastrados 
    if(this.lista.length == 0){ // Se for a primeira  ação do jogo vai chamar o metodo
      this.gera_numero()
    }
    if(this.lista.indexOf(numero) == -1){ // Se o numero não for cadastrado vai cadastra-lo e limpar a tela lá no front
      this.lista.push(numero)
      console.log(numero)
      document.getElementById("txtnumero").value = ''
    }else{
      alert('Número existente')
    }
  }else{
    encerra_jogo()
  }
  
 }
}
var jogo_adivinha = new Jogo_adivinha()



