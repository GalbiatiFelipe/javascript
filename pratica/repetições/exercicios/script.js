function contar() {
    var ini = document.getElementById('ininum')
    var final = document.getElementById('finnum')
    var inter = document.getElementById('idinter')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || final.value.length == 0 || inter.value.length == 0) {
        alert('Preencha os campos corretamente')
    } else {
        res.innerHTML = 'contando..'
        var i = Number(ini.value)
        var f = Number(final.value)
        var p = Number(inter.value)
    
    if (p <= 0) {
        alert('Intervalo invalido')
        p = 1
    }
    if (i < f) {
        for (var conta; conta <= f; conta += p) {
            res.innerHTML += `${conta}`
        }
    }
   }
}
