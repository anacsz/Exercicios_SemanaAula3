//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par

let num1 = 18
let num2 = 2
let resultado = num1 / num2


console.log(`O resultado da divisão é ${resultado}`)

if (num1%num2 === 0){
    console.log(`PAR`)
}else{
    console.log(`IMPAR`)
}