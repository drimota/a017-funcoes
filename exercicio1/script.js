function divisor(params = 30) {
    console.log("=".repeat(params))
}

// function seuNome() {
//     const nome = prompt("Qual seu nome?")
//     console.log(`Olá, ${nome}!`)
// }

// function tabuada() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${6} X ${i} = ${6 * i}`)
//     }
// }

const seuNome = () => {
    const nome = prompt("Qual seu nome?")
    console.log(`Olá, ${nome}!`)
}

const tabuada = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${6} X ${i} = ${6 * i}`)
    }
}


seuNome()
divisor()
tabuada()
divisor()