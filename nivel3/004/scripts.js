function contagem() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 10 até 1</h2>`
    
    for (let cont = 10; cont >= 1; cont--) {
        saida.innerHTML += `${cont},`
        console.log(cont)
    }
}