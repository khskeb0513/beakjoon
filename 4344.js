const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const makeDigitPercentage = (digit) => {
    digit = (digit * 100).toFixed(3)
    if (digit[1] === '.') digit = '0' + digit
    return digit + '%'
}

const pyeongGyun = async (str) => {
    let pyeongGyunValue = 0
    let arr = str.split(' ')
    arr = await arr.slice(1, arr.length)
    arr = await arr.map(v => {
        return parseInt(v)
    })
    arr.forEach(v => pyeongGyunValue = v + pyeongGyunValue)
    pyeongGyunValue = pyeongGyunValue / arr.length
    arr = await arr.map(v => {
        return pyeongGyunValue < v
    })
    let percentage = await arr.filter(v => {
        return v === true
    }).length / arr.length
    return makeDigitPercentage(percentage);
}

let lines = []

rl.on("line", async (str) => {
    await lines.push(str.toString().trim())
    await rl.close()
}).on("close", async () => {
    lines = await lines.splice(1, lines.length)
    for (const v of lines) {
        console.log(await pyeongGyun(v))
    }
    await process.exit()
})
