function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#AAB5CE'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#788DA8'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#745B91'
    }
}