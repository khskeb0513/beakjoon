const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hapSung = (number) => {
    for (let i = 0; i <= number; i++) {
        let sum = 0;
        ([...i.toString()]).forEach(v => {
            sum = sum + parseInt(v)
        })
        if (number === i + sum) {
            console.log(i)
            break
        }
        if (i === number) {
            console.log(0)
            break
        }
    }
}

let number = 0

rl.on("line", (str) => {
    number = parseInt(str.toString().trim())
    rl.close()
}).on("close", () => {
    hapSung(number)
    process.exit()
})
