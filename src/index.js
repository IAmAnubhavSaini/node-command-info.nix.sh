#!/usr/bin/env node
"use strict";
var _a = require('./lib'), getWhich = _a.getWhich, getType = _a.getType, getWhereis = _a.getWhereis, getCommandV = _a.getCommandV, getCommandv = _a.getCommandv;
var cmd = process.argv[2];
if (!cmd || cmd.length < 1) {
    console.error("You didn't provide a command.");
    cmd = 'bash';
}
console.table([getWhich, getType, getWhereis, getCommandV, getCommandv].map(function (fn) { return fn(cmd); }));
//# sourceMappingURL=index.js.map