const fs = require("fs");
const path = require('path');

function getSlashs() {
    const folderPath = `${process.cwd()}/src/Slash`;
    let files = [];
    const items = fs.readdirSync(folderPath);
    for (const item of items) {
        const itemPath = path.join(folderPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            files.push(...getSlashs(itemPath));
        } else {
            files.push(itemPath.replace(".js", ''));
        }
    }
    return files;
}

module.exports = async (client) => {
    for (const SlashCommand of getSlashs()) {
        const props = require(SlashCommand);
        client.interactions.set(props.name, { ...props });
        client.register_arr.push(props);
    }
};