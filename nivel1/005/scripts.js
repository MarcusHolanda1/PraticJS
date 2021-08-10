window.alert('Bem vindo')

function calcular(){
    let num = window.prompt('Digite um número')
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>O dobro de ${num} é ${num * 2} e a metade é ${num/2}<p>`
}