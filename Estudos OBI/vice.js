function vice(A, B, C){
    let vice = 0 

    if(A > B && A < C || A > C && A < B){
        let vice = A

        console.log(`O vice é ${A}`)
    } else if(B > A && B < C || B > C && B < A){
        let vice = B
        console.log(`O vice é ${B}`)
    } else{
        let vice = C
        console.log(`O vice é ${C}`)
    }
}
vice(10, 5,9)