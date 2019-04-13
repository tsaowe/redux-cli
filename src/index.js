const fs = require('fs');
const path = require('path');


const util = require('./util.js');

const config = {
    defaultInput: path.join(__dirname, '..', '.redux', 'actions.json'),
    defaultOutput: path.join(__dirname, '..', '.redux', 'output.js'),
    actionPrefix:'REDUX-CLI@'
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


let actionNames = [];
let actionArray = [];
let reducerArray = [];


for (let key in configFile) {
    let ACTION = util.generateActionName(key);
    let params = configFile[key];
    actionNames.push(ACTION);
    actionArray.push(util.generateActionItem(key, params));
    reducerArray.push(util.generateReducerItem(ACTION, params))
}


let fileContent = `import produce from "immer"

/***************************************ACTIONS start******************************************************************/
${util.generateActionCreator(actionNames.map(item => `  ${item}: '${config.actionPrefix}${item}'`))}
/***************************************ACTIONS end  ******************************************************************/


/***************************************reducer start******************************************************************/
${util.generateReducer(reducerArray)}
/***************************************reducer end********************************************************************/


/***************************************dispatcher start***************************************************************/
${util.generateOutput(actionArray)}
/***************************************dispatcher end*****************************************************************/
`;


fs.writeFileSync(config.defaultOutput, fileContent);
