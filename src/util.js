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
    return name.match(/([A-Z]{1}[a-z]+)/g).map(item=>item.toUpperCase()).join('-');
}


console.log(generateActionName('getNameById'));
