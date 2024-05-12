function media(x, y, z){
    let nota1 = x
    let nota2 = y
    let nota3 = z
    let total = x + y + z
    let média = total/3

    console.log(`A nota da prova 1 foi ${nota1} \nA nota da prova 2 foi ${nota2}\nA nota da prova 3 foi ${nota3}\nA média geral é igual à ${média.toFixed(1)}`)
}

media(5,6,7)