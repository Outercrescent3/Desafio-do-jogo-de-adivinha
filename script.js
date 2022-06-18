
//esse primeiro código também funciona porém o segundo código é menor.
/*var aleatorio1 = Math.random().toFixed(2)*100+1
var aleatorio = Math.floor(aleatorio1)*/

//fiz uns testes só com Math.random e mesmo assim ainda dava um numero quebrado. Então tive que colocar tudo dentro de um Math.ceil e o problema foi resolvido.
 var aleatorio = Math.ceil(Math.random(aleatorio).toFixed(2)*100+1)
 var palpite = document.getElementById('txtnumero')
 var botão = document.getElementById("botão")
 var res = document.getElementById('res')
 var baixoOUalto = document.querySelector('.baixoOuAlto')
 var ultimoResultado = document.querySelector('.ultimoResultado')
 var contagem = document.getElementById('contagem')
 let reinicio = document.querySelector(".reinicio")
 var tudo = document.querySelector('.tudo')
 var valores = []

 
    function isNumero(n){
        if(n >=1 && n <=100) {
            return true
        } else{
        return false
        }
    }

// Essa função inLista vai verificar se o número existe na lista atráves do indexOf() que vai verificar se o valor passado existe na Array, caso exista a função vai passar verdadeiro. 

    function inLista( n, valores){
        if(valores.indexOf(Number(n)) !== -1){
            return true
        }else{
             return false
        }
    }


 // ====== = = = = = = = = = = = = = = = = == = = = = = = = = = = = = = = = = = == = = = == = = = = = = = == = = = = === = == = = = = == = = = == = = = = == = = == =

function enviado(){
    if(valores.length === 10){
        
        baixoOUalto.setAttribute('class' , 'fimdejogo')
        baixoOUalto.innerHTML = 'FIM DE JOGO!!!'
    
        fimdejogo()

    }else{    
 // É preciso colocar !(diferente) em inLista pq eu quero que a função inLista retorne false e seja True para o IF aqui em baixo.
    if(isNumero(Number(palpite.value)) && !inLista(palpite.value, valores)){
             valores.push(Number(palpite.value))   
             res.innerHTML += ` ${palpite.value}, `
    }else{
        alert("Numero inválido ou já cadastrado!")
        
        }

// Verificar se o numero está perto ou longe.
    if(Number(palpite.value) === aleatorio){
        baixoOUalto.innerHTML = 'Você Acertou !!!!'
        baixoOUalto.setAttribute('class' , 'baixoOuAlto')

        
        fimdejogo()
      

     }else if(Number(palpite.value) < aleatorio){
       baixoOUalto.innerHTML = 'Errou!!! O número está abaixo'
       baixoOUalto.setAttribute('class' , 'errou')
    }else if(Number(palpite.value) > aleatorio){
        baixoOUalto.innerHTML = 'Errou!!! O número está alto'
        baixoOUalto.setAttribute('class' , 'errou')
    }
     //  ultimoResultado.innerHTML = `${aleatorio}`   // ~~~~~~~ Essa llinha vai retornar no HTML qual valor foi o número gerado. Serve para o programador fazer os testes.
    if(valores.length === 1 ){
        contagem.innerHTML = `Você já colocou : ${valores.length} número.`
        }else{
            contagem.innerHTML = `Você já colocou : ${valores.length} números.`
    }
  
 
    palpite.value = ''
    palpite.focus()

    }  




function fimdejogo(){
    palpite.disabled = true
    botão.disabled = true

   
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar novo jogo'
    tudo.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)

    }



function reiniciarJogo(){    

   window.location.reload()

   }
}
