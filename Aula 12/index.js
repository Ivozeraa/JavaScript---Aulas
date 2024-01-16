function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pas.value)
    res.innerHTML = 'Contando:'

    if(ini.value.length == 0 || Number(fim.value) <= Number(ini.value)||Number(ini.value) < 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Impossível contar!'
    } else if(fim.value.length == 0 || Number(fim.value)<= 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Impossível contar!'
    } else if(pas.value.length == 0 || Number(pas.value) <= 0){
        alert('[ERRO] PASSO INVÁLIDO! O valor será ajustado para 1!')
        res.innerHTML = 'Tente novamente'
    } else{
        for(var n1;n1<=n2;n1+=n3){
            res.innerHTML += ` ${n1}, `
        }
    }
}