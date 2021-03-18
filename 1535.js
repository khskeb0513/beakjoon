const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hapSung = (dataArr) => {
    let arr = []
    for (let i = 0; i <= dataArr.length; i++) {
        arr.push({
            health: parseInt(dataArr[0][i]),
            happy: parseInt(dataArr[1][i])
        })
    }
    console.log(arr)
    let myukZip = 1
    for (let i = 1; i <= arr.length; i++)
        myukZip = myukZip * 2

}

let lines = []

rl.on("line", (str) => {
    lines = str.toString().trim().split('.')
    rl.close()
}).on("close", () => {
    lines = lines.map(v => {
        return v.split(' ')
    }).splice(1, lines.length)
    hapSung(lines)
    process.exit()
})
