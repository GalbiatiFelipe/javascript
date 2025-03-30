
function calcular() {
    var primeiro = window.document.getElementById('txtn1')
    var segundo = document.getElementById('txtn2')
    var op = document.getElementById('txtop')
    var res = document.getElementById('txtres')
    var n1 = Number.primeiro.value
    var n2 = Number.segundo.value
    var r = n1 + n2

    res.innerHTML(`${r}`)
}