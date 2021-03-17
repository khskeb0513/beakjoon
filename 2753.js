const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const isYunYeon = async (year) => {
    return year % 4 === 0 && year % 100 !== 0 ? 1 : (
        year % 400 === 0 ? 1 : 0
    )
}

rl.on("line", async (year) => {
    console.log(await isYunYeon(year))
    rl.close()
}).on("close", () => {
    process.exit()
})
