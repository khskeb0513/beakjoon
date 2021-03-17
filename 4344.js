const fs = require('fs')
const input = process.env.NODE_ENV !== 'development' ?
    fs.readFileSync('/dev/stdin').toString().trim() :
    `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`

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

(async () => {
    let inputArr =
        input.split('\n')
    inputArr = inputArr.slice(1, inputArr.length)
    for (const v of inputArr) {
        console.log(await pyeongGyun(v))
    }
})()
