"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
function getWhich(cmd) {
    var out = child_process_1.execSync("which " + cmd).toString('utf8');
    if (out.endsWith('not found')) {
        return {
            found: false, type: 'which'
        };
    }
    return {
        found: true,
        command: out,
        type: 'which'
    };
}
function getType(cmd) {
    var out = child_process_1.execSync("type " + cmd).toString('utf8');
    if (out.endsWith('not found')) {
        return { found: false, type: 'type' };
    }
    return {
        found: true,
        command: out.split(' is ')[1],
        type: 'type'
    };
}
function getWhereis(cmd) {
    var out = child_process_1.execSync("whereis " + cmd).toString('utf8');
    if (out.endsWith(':') || out.endsWith(': ')) {
        return { found: false, type: 'whereis' };
    }
    return {
        found: true,
        foundIn: JSON.stringify((out.split(': ')[1]).split(' ')),
        type: 'whereis'
    };
}
function getCommandV(cmd) {
    var out = child_process_1.execSync("command -V " + cmd).toString('utf8');
    if (out.endsWith('not found')) {
        return { found: false, type: 'command -V' };
    }
    return {
        found: true, command: out.split(' is ')[1], type: 'command -V'
    };
}
function getCommandv(cmd) {
    var out = child_process_1.execSync("command -V " + cmd).toString('utf8');
    if (out === '') {
        return { found: false, type: 'command -v' };
    }
    return {
        found: true, command: out, type: 'command -v'
    };
}
module.exports = {
    getWhich: getWhich,
    getType: getType,
    getWhereis: getWhereis,
    getCommandV: getCommandV,
    getCommandv: getCommandv
};
//# sourceMappingURL=lib.js.map