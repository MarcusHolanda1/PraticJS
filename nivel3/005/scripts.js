function contar(){
    let saida = document.getElementById('saida')
    let num1 = Number(document.getElementById('fnum1').value)
    let num2 = Number(document.getElementById('fnum2').value)

    saida.innerHTML = `Contando de ${num1} até ${num2}`

    let cont

    if (num1 < num2) {
        cont = num1
        while (cont <= num2) {
            saida.innerHTML += ` ${cont} ;`
            cont ++
        }
    } else  if (num2<num1) {
        cont = num1
        while (cont >= num2) {
            saida.innerHTML += ` ${cont} ;`
            cont --
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
}