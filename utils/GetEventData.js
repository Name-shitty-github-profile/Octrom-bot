const fs = require('fs');
const path = require('path');

module.exports = function(module) {
    const folderPath = `${process.cwd()}/${module}`;
    let Datas = [];
    for (const item of fs.readdirSync(folderPath)) {
        if (item.endsWith('.js')) {
            Datas.push(require(path.join(folderPath, item)));
        }
    }
    return Datas;
}