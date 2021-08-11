function verifyStation(){
    mes = window.prompt('Digite o mês por extenso, ex:(Setembro)')

    let saida = document.getElementById('saida')

    let estacao;

    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FERVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO': 
            estacao = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': 
            estacao = 'OUTONO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML += `<p>No mês de ${mes}, estamos na estação ${estacao}</p>`

}