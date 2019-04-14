let actionName = null;

exports.setActionName = action => actionName = action;

function capital(name) {
    if (isString(name)) {
        if (name.length > 0) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        } else {
            return name.toUpperCase();
        }

    } else {
        throw ('argument should be instance of String');
    }
}


function isString(name) {
    return Object.prototype.toString.call(name) === '[object String]';
}

function generateActionName(name) {
    name = capital(name);
    return name.match(/([A-Z][a-z]+)/g).map(item => item.toUpperCase()).join('_');
}

exports.generateActionName = generateActionName;


exports.generateActionItem = (name, params) => {
    let arr = [`type: ${actionName}.${generateActionName(name)}`].concat(params.map(item => `    ${item}`));
    return `  ${name}: (${params.join(', ')}) => ({
    ${arr.join(',\n')}
  })`
};

exports.generateActionCreator = (params) => {
    return `export const ${actionName} = {
${params.join(',\n')}
};`
};
exports.generateReducerItem = (ACTION, params) => {
    return `    case ${actionName}.${ACTION}:${params.length ? `\n      const {${params.join(', ')}} = action;` : ''}
      return produce(state, draftState => {
        // todo
      });`
};

exports.generateReducer = (reducers) => {
    return `export const reducer = (state = []/*todo*/, action) => {
  const {type} = action;
  switch (type) {
${reducers.join('\n')}
    default:
      return state;
  }
};`
};

exports.generateOutput = (params) => {
    return `export const dispatchers = {
${params.join(',\n')}
};`
};
