function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length = 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique o ano inserido e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var gen = ''
        var img = document.createElement('img') //Cria uma imagem com JS
        img.setAttribute('id', 'foto') //Atribui id a imagem
        if (fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','homem-bebe.jpg')
            } else if (idade < 21) {
            //jovem
            img.setAttribute('src','homem-jovem.jpg')
            } else if (idade < 50){
            //adulto
            img.setAttribute('src','homem-adulto.jpg')
            } else {
            //idoso
            img.setAttribute('src','homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','mulher-bebe.jpg')
                } else if (idade < 21) {
                //jovem
                img.setAttribute('src','mulher-jovem.jpg')
                } else if (idade < 50){
                //adulto
                img.setAttribute('src','mulher-adulta.jpg')
                } else {
                //idoso
                img.setAttribute('src','mulher-idosa.jpg')
                }
        }
        res.innerHTML = `Recebemos o gênero ${gen} com ${idade} anos.`
        res.appendChild(img) //adiciona uma imagem via JS
    }
}