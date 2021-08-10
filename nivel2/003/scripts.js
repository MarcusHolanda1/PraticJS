function verify(){
    let num1 = Number(window.prompt('Digite o primero número aqui'))
    let num2 = Number(window.prompt('Digite o outro número aqui'))
    
    let result = document.getElementById('result')
                                                      
    if (num1 > num2) {
        result.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é o ${num1}`
    }
    else if 
        (num1 < num2){ 
            result.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é o ${num2}`
    }
    else 
        result.innerHTML = `Analisando os valores ${num1} e ${num2}, o valor é igual`
}
