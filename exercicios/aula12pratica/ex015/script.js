function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] ano inválido!')
   } else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    if (fsex[0].checked) {
        genero = 'Homem'
    } else if (fsex[1].checked) {
        genero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}