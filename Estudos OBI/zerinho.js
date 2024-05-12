function zerinhoOuUm(A, B, C){
    if(A == 1 && B == 0 && C== 0 || A == 0 && B == 1 && C == 1){
        console.log('Alice é vencedora')
    } else if(A == 1 && B == 0 && C== 1 || A == 0 && B == 1 && C == 0){
        console.log("Bento é vencendor")
    } else if(A == 1 && B == 1 && C== 0 || A == 0 && B == 0 && C == 1){
        console.log("Carla é vencendora")
    } else{
        console.log("Sem vencedores!")
    }
}
zerinhoOuUm(1, 0, 0)