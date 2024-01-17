let valores = [8, 1, 4, 5, 9, 6]

/*
for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){ // for simplificado para Array
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}