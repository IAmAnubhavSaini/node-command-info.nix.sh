import {execSync} from 'child_process';

interface CommandInfo {
    found: boolean;
    command?: string;
    foundIn?: string;
    type: string;
}

function getWhich(cmd: string): CommandInfo {
    const out: string = execSync(`which ${cmd}`).toString('utf8');
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

function getType(cmd: string): CommandInfo {
    const out: string = execSync(`type ${cmd}`).toString('utf8');
    if (out.endsWith('not found')) {
        return {found: false, type: 'type'};
    }
    return {
        found: true,
        command: out.split(' is ')[1],
        type: 'type'
    };
}

function getWhereis(cmd: string): CommandInfo {
    const out: string = execSync(`whereis ${cmd}`).toString('utf8');
    if (out.endsWith(':') || out.endsWith(': ')) {
        return {found: false, type: 'whereis'};
    }
    return {
        found: true,
        foundIn: JSON.stringify((out.split(': ')[1])!.split(' ')),
        type: 'whereis'
    };
}

function getCommandV(cmd: string): CommandInfo {
    const out: string = execSync(`command -V ${cmd}`).toString('utf8');
    if (out.endsWith('not found')) {
        return {found: false, type: 'command -V'};
    }
    return {
        found: true, command: out.split(' is ')[1], type: 'command -V'
    };
}

function getCommandv(cmd: string): CommandInfo {
    const out: string = execSync(`command -V ${cmd}`).toString('utf8');
    if (out === '') {
        return {found: false, type: 'command -v'};
    }
    return {
        found: true, command: out, type: 'command -v'
    };
}

module.exports = {
    getWhich,
    getType,
    getWhereis,
    getCommandV,
    getCommandv
};
