#!/usr/bin/env node

const {
    getWhich,
    getType,
    getWhereis,
    getCommandV,
    getCommandv
} = require('./lib');

let cmd = process.argv[2];

if (!cmd || cmd.length < 1) {
    console.error(`You didn't provide a command.`);
    cmd = 'bash';
}

console.table([getWhich, getType, getWhereis, getCommandV, getCommandv].map(fn => fn(cmd)));
