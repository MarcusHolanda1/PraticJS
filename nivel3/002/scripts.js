function contar(){
    result = document.getElementById('result')

    for (i = 0; i <= 10; i++) {
        if(i % 2 === 0) {
            result.innerHTML += `<p style="color: blue">${i}</p>`
        }
        else{
            result.innerHTML += `<p>${i},</p>`
        }
    }
}