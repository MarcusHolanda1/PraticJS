function calcMedia () {
    let nome = window.prompt('Qual é o nome do aluno?')

    let nota1 = Number(window.prompt('Qual foi a primeira nota na escola?'))
    let nota2 = Number(window.prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))

    let res = document.getElementById('result')


    res.innerHTML = `<p>Calculando a média final de ${nome}...</p>`
    res.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
    res.innerHTML += `<p>A média final será ${(nota1 + nota2) /2} </p>`
    
}