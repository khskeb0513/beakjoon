const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const printIsPythagoras = async (numbers) => {
    const numbersArr = await numbers.split(' ')
    const squareArr = await numbersArr.map(v => {
        return v * v
    }).sort((a, b) => {
        return a - b
    })
    let isZero = false
    squareArr.forEach(v => {
        if (v === 0) isZero = true
    })
    if (!isZero) {
        console.log(squareArr[0] + squareArr[1] === squareArr[2] ? 'right' : 'wrong')
    }
}

rl.on("line", async (numbers) => {
    numbers = numbers.toString().trim()
    const numbersArr =
        // ['1 2 3', '6 8 10', '0 0 0']
        numbers.split('/n')
    for (const v of numbersArr) {
        await printIsPythagoras(v)
    }
    rl.close()
}).on("close", () => {
    process.exit()
})
