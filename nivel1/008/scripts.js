function calcular(){
    let num = window.prompt('Digite um número')

    let res = document.getElementById('result')

    res.innerHTML = `<p> O número a ser analisado aqui será o <strong>${num}</strong> </p>`
    res.innerHTML += `<hr></hr>`
    res.innerHTML += `<p> O seu valor absoluto é ${Math.abs(num)} </p>`
    res.innerHTML += `<p> A sua parte inteira é ${parseInt(num)} </p>`
    res.innerHTML += `<p> O valor do número inteiro mais próximo é ${Math.round(num)} </p>`
    res.innerHTML += `<p> A raiz quadrada do número é ${Math.sqrt(num)} </p>`
    res.innerHTML += `<p> A raiz cubica é ${Math.cbrt(num)} </p>`
    res.innerHTML += `<p> O valor de ${num}² é = ${num ** 2}</p>`
    res.innerHTML += `<p> O valor de ${num}³ é = ${num ** 3}</p>`
}