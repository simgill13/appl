const fs = require('fs')
const path = require('path')
const { camelCase } = require('lodash')



const createJson = (array) => {
    let tests = []; let name;
    array.map((obj) => {
        name = obj.name;
        obj.tests.map((test) => tests.push(test))
    })
    return fs.writeFileSync(path.join(__dirname, `${camelCase(name)}.json`), JSON.stringify({ name, tests }));
}

async function generateFile(combinedJson) {
    let name; let fileTests = [];
    for (var key in combinedJson) {
        if (combinedJson.hasOwnProperty(key)) {
            var element = combinedJson[key];
            element.fixtures.map((obj) => {
                fileTests.push(obj)
            })
        }
    }
    return await createJson(fileTests);
}

module.exports = { generateFile } 