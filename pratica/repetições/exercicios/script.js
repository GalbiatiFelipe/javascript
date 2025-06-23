let numero = parseFloat(document.getElementById('inum').value)
let termo = 0
let res = document.getElementById('res')

function gerarTabuada() {
    for(contador = 1; contador <= 10; contador++) {
    termo = termo + numero
    res.textContent = termo
}
}