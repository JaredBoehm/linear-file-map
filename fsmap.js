const fs = require('fs')
const path = require('path')

async function fsmap(directory) {
    let fileArray = []
    let files = fs.readdirSync(directory)
    for (let file of files) {
        fileArray.push({
            name: file,
            path: path.resolve(file)
        })
    }
    return fileArray
}
console.log(fsmap('./'))