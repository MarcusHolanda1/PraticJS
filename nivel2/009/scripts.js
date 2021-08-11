function calcular(){
    let num1 = Number(window.prompt('Digite o primeiro valor'))
    let num2 = Number(window.prompt('Digite o segundo valor'))

    let somar = 1
    let subtrair = 2
    let multiplicar = 3
    let dividir = 4

    let sayCalc = Number(window.prompt(
    `
    Valores informados: ${num1} e ${num2}
    O que vamos fazer?
    [${somar}] Somar
    [${subtrair}] Subtrair
    [${multiplicar}] Multiplicar
    [${dividir}] Dividir    
    `))

    res = document.getElementById('result')

    if (sayCalc === somar) {
        res.innerHTML = `${num1} + ${num2} = ${num1 + num2}`
    }    
    else if (sayCalc === subtrair) {
        res.innerHTML = `${num1} - ${num2} = ${num1 - num2}`
    }
    else if (sayCalc === multiplicar) {
        res.innerHTML = `${num1} * ${num2} = ${num1 * num2}`
    }
    else if (sayCalc === dividir) {
        res.innerHTML = `${num1} / ${num2} = ${num1 / num2}`
    }
    else {
        res.innerHTML = `Opção inválida, você não selecionou o cálculo desejado`
    }
}