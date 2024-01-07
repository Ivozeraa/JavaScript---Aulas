function cidadania() {
    var nomePaís = document.querySelector('input#paísDigitado')
    var resultado = document.querySelector('div#resultado')
    var pais = (nomePaís.value).toUpperCase()

    if (pais != 'BRAZIL') {
        resultado.innerHTML = `<p> Se sua nacionalidade é <b>${pais.toUpperCase()}<b>, você é estrangeiro!<b>`
    } else {
        resultado.innerHTML = `<p> Você nasceu no <b>${pais.toUpperCase()}<b>, você é brasileiro!</p>`
    }
}

