function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    document.body.style.transitionDuration = "2s"
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        img.src = '/Aula 08/Fotos/dia.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(230, 152, 36), rgb(175, 164, 2))'
    } else if(hora >= 12 && hora < 18){
        img.src = '/Aula 08/Fotos/tardee.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(214, 34, 2), rgb(240, 184, 0))'
    } else {
        img.src = '/Aula 08/Fotos/noite.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(23, 1, 119), rgb(4, 0, 19))'
    }
    }