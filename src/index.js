const fs = require('fs');
const path = require('path');
const config = {
    defaultInput: path.join(__dirname, '..', '.redux', 'actions.json'),
    defaultOutput: '',

};


const reduxFolder = path.dirname(config.defaultInput);

let warnMessage = reduxFolder => console.warn(`please create a default actions.json in "${reduxFolder}"`);

if (!fs.existsSync(reduxFolder)) {
    fs.mkdirSync(reduxFolder);
    warnMessage(reduxFolder);
    return;
} else {
    if (!fs.existsSync(config.defaultInput)) {
        warnMessage(reduxFolder);
        return;
    }
}

const configFile = require(config.defaultInput);

for (let key in configFile){

}


