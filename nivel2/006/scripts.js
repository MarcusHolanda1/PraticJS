function calcAge(){
    let yearNasc = Number(window.prompt('Digite o ano em que você nasceu'))

    let dateAtual = new Date()
    let yearAtual = dateAtual.getFullYear()

    calc = yearAtual - yearNasc  

    result = document.getElementById('result')    
    result.innerHTML = `<p>Quem nasceu em <strong>${yearNasc}</strong>, vai completar <strong>${calc}</strong> anos em <strong>${yearAtual}</strong>`
}