const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const printStar = (count) => {
    for (let i = 0; i <= count; i++) {
        console.log(Array(i).fill(' ').concat(Array(count - i).fill('*')).join(''))
    }
}

rl.on("line", (count) => {
    printStar(count)
    rl.close()
}).on("close", () => {
    process.exit()
})
