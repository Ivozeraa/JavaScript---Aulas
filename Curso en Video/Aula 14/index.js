let num = [1 , 5 , 2]
num[3] = 6 // Acrescenta o valor no índice indicado
num.push(7) // Acrescenta o número dentro do () no final do Array
num.sort() // Organiza em ordem crescente

console.log(num) // Chama a var num
console.log(`O vetor tem ${num.length} posições`) // O length indica o comprimento do array
console.log(`O primeiro valor do vetor é ${num[0]}`) // Chama o valor do indice indicado dentro das []
let pos = num.indexOf(8) //Procura o valor no array
if(pos == -1){
    console.log('Valor não encontrado')
} else {
console.log(`O valor 1 está na posição ${pos}`)
}