const fs = require('fs')
const input = process.env.NODE_ENV !== 'development' ?
    fs.readFileSync('/dev/stdin').toString().trim() :
    fs.readFileSync('./9012.body').toString().trim();

const pairRemover = (str) => {
    if (str[0] === '(' && str[1] === ')') {
        pairRemover(str.slice(2, str.length))
    } else if (str[str.length - 1] === '(' && str[str.length] === ')') {
        pairRemover(str.slice(0, str.length - 2))
    } else {
        bottomRemover(str)
    }
}

const bottomRemover = (str) => {
    if (str[0] === '(' && str[str.length] === ')') {
        pairRemover(str.slice(1, str.length - 1))
    } else if (str.length === 0) {
        console.log('YES')
    } else {
        console.log('NO')
    }
}

(async () => {
    let inputArr = input.split('\n')
    inputArr = inputArr.splice(1, inputArr.length)
    console.log(inputArr)
    for (const v of inputArr) {
        console.log(v)
        await pairRemover([...v])
    }
})()
