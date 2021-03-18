const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pairChecker = (arr) => {
    const left = arr.filter(v => {
        return v === '('
    }).length
    const right = arr.filter(v => {
        return v === ')'
    }).length
    // console.log(arr.join(''), {left, right})
    if (left === right && (left + right) % 2 === 0) {
        console.log('YES')
    } else console.log('NO')
}

let lines = []

rl.on("line", async (str) => {
    await lines.push(str.toString().trim())
    await rl.close()
}).on("close", async () => {
    lines = lines.splice(1, lines.length)
    for (const v of lines) {
        await pairChecker([...v])
    }
    process.exit()
})
