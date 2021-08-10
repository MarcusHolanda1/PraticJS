function sortear(){
    let sortear = document.getElementById('sortear')

    let num = Math.floor(Math.random() * 10)

    sortear.innerHTML += `<p>O número <strong>${num}</strong> foi o sorteado</p>`
}

function limpar(){
    let limpe = document.getElementById('sortear')

    limpe.innerHTML = null


}