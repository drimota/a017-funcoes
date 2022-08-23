function divisor(params = 30) {
    console.log("=".repeat(params))
}
function validaNum() {
    let num = +prompt("Digite um número")
    while (isNaN(num)) {
        num = +prompt("Número invalido! \ntente novamente:")
    }
    return num
}

function soma(n1, n2) {
    console.log("Soma")
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
    divisor()
}
function subtracao(n1, n2) {
    console.log("Subtração")
    console.log(`${n1} - ${n2} = ${n1 - n2}`)
    divisor()
}
function multiplicacao(n1, n2) {
    console.log("Multiplicação")
    console.log(`${n1} X ${n2} = ${n1 * n2}`)
    divisor()
}
function divisao(n1, n2) {
    console.log("Multiplicação")
    console.log(`${n1} / ${n2} = ${n1 * n2}`)
    divisor()
}


let num1 = validaNum()
let num2 = validaNum()

soma(num1, num2)
subtracao(num1, num2)
multiplicacao(num1, num2)
divisao(num1, num2)