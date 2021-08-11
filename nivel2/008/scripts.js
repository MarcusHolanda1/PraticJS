let saida = document.getElementById('result')
let valor;
let palpite;



function sortear(){
    let computador = Math.floor(Math.random() * 10)
    valor = computador 
    console.log(valor)
}


function adivinharNum() {  
    
    palpite = Number(window.prompt('Qual é o seu palpite?'))
    
    
    if (palpite > valor){
        saida.innerHTML += `<p>Você falou ${palpite}, meu número é <strong>MENOR</strong></p>`
    }
    else if (palpite < valor){
        saida.innerHTML += `<p>Você falou ${palpite}, meu número é <strong>MAIOR</strong></p>`
    }    
    else{
        saida.innerHTML += `<p>Você falou ${palpite} e ACERTOUUU PARABÉNS!!</p>`
        document.getElementById('botao').style.visibility = 'hidden'

    }
}