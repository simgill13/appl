
const fs = require('fs')
const path = require('path')
const { generateFile } = require('./reader')


const consumer = () => {
    try {
        let combine = {};
        fs.readdirSync(path.join(__dirname, 'results')).map((file, index) =>  combine[`${index + 1}`] = JSON.parse(fs.readFileSync(path.join(__dirname, `results/${file}`), 'utf8')));
        return generateFile(combine);
    } catch (err) {
        console.error(err, 'unable to create output')
    }
}

module.exports = { consumer }