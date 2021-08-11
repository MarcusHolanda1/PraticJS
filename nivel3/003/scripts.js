function contar(){

    result = document.getElementById('result');

    for(contador = 0; contador <= 10; contador++){
        if (contador % 2 == 0){
            result.innerHTML += `<p>${contador}</p>, `
        }
    }
}