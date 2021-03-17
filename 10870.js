const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calPhiOverOrThree = async (input) => {
    const arr = Array(input + 1).fill('0')
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i < input + 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[input]
}

const calPhiUnderThree = async (input) => {
    if (input === 2) {
        return 1
    } else {
        return input
    }
}

rl.on("line", async (input) => {
    await console.log((input < 3 ? await calPhiUnderThree(parseInt(input)) : await calPhiOverOrThree(parseInt(input))))
    await rl.close()
})
