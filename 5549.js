// const input =
//     '4 7\n' +
//     '4\n' +
//     'JIOJOIJ\n' +
//     'IOJOIJO\n' +
//     'JOIJOOI\n' +
//     'OOJJIJO\n' +
//     '3 5 4 7\n' +
//     '2 2 3 6\n' +
//     '2 2 2 2\n' +
//     '1 1 4 7';
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const sliceMap = async (map, mapData, locationData) => {
    let locationObj = locationData.split(' ')
    locationObj = locationObj.map(v => {
        return parseInt(v)
    })
    const mapArr = []
    for (let i = locationObj[0] - 1; i <= locationObj[2] - 1; i++) {
        mapArr.push(map[i].slice(locationObj[1] - 1, locationObj[3]))
    }
    return mapArr.flat()
}

const findCase = async (flattenMap) => {
    const cse = ['J', 'O', 'I']
    let str = []
    cse.forEach(v => {
        str.push(flattenMap.filter(item => {
            return item === v
        }).length)
    })
    str = str.join(' ')
    return str
}

(async () => {
    let inputArr = input.split('\n')
    let searchData = inputArr.slice(0, 2),
        searchMap = inputArr.slice(2, 2 + parseInt(searchData[0].split(' ')[0])),
        locationData = inputArr.slice(2 + parseInt(searchData[0].split(' ')[0]), inputArr.length)
    searchData = {
        mapData: {
            height: parseInt(searchData[0].split(' ')[0]),
            width: parseInt(searchData[0].split(' ')[1])
        }, locationCount: parseInt(searchData[1])
    }
    searchMap = searchMap.map(v => {
        return [...v]
    })
    for (let i = 0; i < searchData.locationCount; i++) {
        console.log(await findCase(await sliceMap(searchMap, searchData, locationData[i])))
    }
})()
