function calcularMedia(){
    let nome = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))

    let media = (nota1 + nota2) / 2

    res = document.getElementById('res')

    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong></p>`
    res.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
    res.innerHTML += `<p>A média final será ${media}</p>`

    if (media >= 6) {
        res.innerHTML += `<p style="color:green">Você passou</p>`
    } else {
        res.innerHTML += `<p style="color:red">Você reprovou seu bosta</p>`
    }
}