function calculadora(X, Y, O){
    if(O === "+"){
        let soma = X + Y
        console.log(soma)
    } else if(O === "-"){
        let subtração = X - Y
        console.log(subtração)
    } else if(O === "x"){
        let multiplicação = X * Y
        console.log(multiplicação)
    } else if (O === "/"){
        let divisão = X/Y
        console.log(divisão)
    } else [
        console.log("[ERROR] Insira um operador válido [+][-][x][/]")
    ]
}
calculadora(50, 5, "/")