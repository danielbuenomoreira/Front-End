function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora >= 3 && hora < 13) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=13 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}
