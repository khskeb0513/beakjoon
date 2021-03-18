const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 0

const yunSan = (num) => {
    if (num !== 1) {
        if (num % 3 === 0 && num % 6 !== 0) {
            count++
            yunSan(num / 3)
        } else if (num % 2 === 0 && num % 6 !== 0) {
            count++
            yunSan(num / 2)
        } else if (num % 6 === 0) {
            count = count + 2
            yunSan(num / 6)
        } else {
            count++
            yunSan(num = num - 1)
        }
    } else {
        console.log(count)
    }
}

rl.on("line", async (str) => {
    await yunSan(parseInt(str))
    await rl.close()
}).on("close", () => {
    process.exit()
})
