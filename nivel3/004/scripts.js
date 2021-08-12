function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    
    for (let cont = 0; cont <= num; cont++) {
        saida.innerHTML += `${cont}/`
        console.log(cont)
    }
    
}