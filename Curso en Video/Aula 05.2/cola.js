function cidadania() {
    var nomePaís = document.querySelector('input#paísDigitado')
    var resultado = document.querySelector('div#resultado')
    var país = (nomePaís.value).toUpperCase() 
    
    if (país != 'BRASIL'){
        resultado.innerHTML = `Se o seu País de origem é <strong>${país.toUpperCase()}</strong>, você é Estrangeiro.` 
    } else {
        resultado.innerHTML = `Você nasceu no <strong>${país.toUpperCase()}</strong>, parabéns! Você é Brasileiro.`
    }
}