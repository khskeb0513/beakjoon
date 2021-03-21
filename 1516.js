// let input =
//     ('5\n' +
//         '10 -1\n' +
//         '10 1 -1\n' +
//         '4 1 -1\n' +
//         '4 3 1 -1\n' +
//         '3 3 -1').split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const timeCalc = (dataArr, target) => {
    let time = 0
    time = time + target.time
    target.req.forEach(v => {
        time = time + dataArr[v].time
    })
    console.log(time)
}

(() => {
    input = input.splice(1, input.length).map(v => {
        return v.split(' ')
    }).map(v => {
        return v.splice(0, v.length - 1)
    })
    input = input.map(v => {
        return {
            time: parseInt(v[0]),
            req: v.slice(1, v.length).map(no => {
                return parseInt(no)
            }).map(no => {
                return no - 1
            })
        }
    })
    console.log(input)
    input.forEach(v => {
        timeCalc(input, v)
    })
})()
