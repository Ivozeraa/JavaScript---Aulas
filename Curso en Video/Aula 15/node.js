function parimp(n) /* parametro */{
    if(n%2==0){ // Ação
        return 'Par' //Retorno 1
    } else{
        return 'Impar' //Retorno 2
    }
}

let res = parimp(7) //chamada da function
console.log(res) //Pode simplificar:

/* console.log(parimp(2)) */