function tabuada(){
    let saida = document.getElementById('saida')
    let num = document.getElementById('fnum')

    saida.innerHTML = `Tabuada de ${num}`

    let c = 1
    while (c <= 10) {
        saida.innerHTML += `${num} x ${c} = <strong>${num * c}</strong><br>`
        c ++
    }

}