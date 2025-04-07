var num = document.getElementById('idnum')
var lista = document.getElementById('idselec')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(l, n) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert('Tudo OK')
    } else {
        alert('Valor inválido ou ja adicionado!')
    }
}