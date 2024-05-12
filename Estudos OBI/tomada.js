function numeroDeTomadas(t1, t2, t3, t4){
    let tomadasLivres = (t1 + t2 + t3 + t4) - 3

    console.log(`O número de tomadas disponíveis é ${tomadasLivres}`)
}

numeroDeTomadas(2,2,2,3)