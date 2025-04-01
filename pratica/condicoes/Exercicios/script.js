//geografia questao
function geografia() {
    var pais = document.getElementById('idpais')
    var res = document.getElementById('res')
    var paisres = pais.value

    if (paisres == 'Rússia' || paisres == 'Russia' || paisres == 'russia' || paisres == 'rússia') {      
        res.innerHTML = `<p>CERTA RESPOSTA! A Rússia possui 17.098.246 km2 de extensão, o maior do mundo.</p>`
    } else if (pais.value.length == 0) {
        alert('Preencha os campos ausentes')
    } else {
        res.innerHTML = `<p>Resposta errada... tente novamente!`
    }
}

//Verificar idade

function idadever() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('idano')
    var sex = document.getElementsByName('sex')
}
