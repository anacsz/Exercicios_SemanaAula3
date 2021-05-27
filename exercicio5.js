//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function matematica(num1, num2){

        let operacaoMat = "multiplicacao"
    
    switch(operacaoMat){
        case 'somar':
            return num1 + num2
            break
        case 'multiplicacao':
            return num1 * num2
            break
        case 'divisao':
            return num1 / num2
            break
        case 'subtacrao':
            return num1 - num2
            break
    }return 'resultado:'

}console.log(matematica(5,5))



