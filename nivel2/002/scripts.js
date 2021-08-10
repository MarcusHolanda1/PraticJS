function verify(){
    let num = window.prompt('Digite um número')

    result =  document.getElementById('result')

    if (num % 2 == 0){
        result.innerHTML = `<p>O número que foi digitado é <strong>PAR</strong></p>`
    }
    else {
        result.innerHTML = `<p>O número digitado é <strong>IMPAR</strong></p>`
    }
}