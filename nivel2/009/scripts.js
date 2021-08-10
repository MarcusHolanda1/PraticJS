let contador = 0
let result = document.getElementById('res')

function contar(){
    contador ++
    result.innerHTML = `Você clicou em mim ${contador} vezes`
}

function zerar(){
    contador = 0
    result.innerHTML = 'zerado'
}