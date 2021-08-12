function somar(){
    let num1 = Number(window.prompt('Digite o primeiro número'))
    let num2 = Number(window.prompt('Digite o segundo número'))

    let res = document.querySelector('section#res')


    res.innerHTML = `<p> A soma dos dois números é ${num1 + num2}</p>`
}