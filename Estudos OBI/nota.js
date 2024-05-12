function calcNota (nota){
    if(nota >= 86){
        console.log("A")
    } else if (nota >= 61){
        console.log("B")
    } else if (nota >= 36){
        console.log("C")
    } else if (nota >= 1){
        console.log("D")
    } else {
        console.log("E")
    }
}

calcNota(85)