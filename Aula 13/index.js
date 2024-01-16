function gerar(){
var number = document.getElementById('number').value
var res = document.getElementById('res')
var tabuada = String()

for(var num = 0; num <=10; num++){
    tabuada += (`${num} X ${number} = ${num * number}</br>`)
}
res.innerHTML = tabuada
}