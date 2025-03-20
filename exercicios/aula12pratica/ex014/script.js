function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '../imagens/dia.png'
        document.body.style.background = '#F2C094'
    } else if (hora >=12 && hora <19) {
        //boa tarde
        img.src = '../imagens/tarde.png'
        document.body.style.background = '#C47846'
    } else {
        //boa noite
        img.src = '../imagens/noite.png'
        document.body.style.background = '#1F3740'
    }
}


