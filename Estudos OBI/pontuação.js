function pontuacao(A, B, C){
    let vice = 0
    if(A > B && A < C || A > C && A < B){
        vice = A
        console.log("A é o vice-campeão")
    } else if (B > A && B < C || B > C && B < A){
        vice = B
        console.log("B é o vice líder")
    } else {
        vice = C
        console.log("C é o vice-campeão")
    }
}

pontuacao(4, 5, 6)