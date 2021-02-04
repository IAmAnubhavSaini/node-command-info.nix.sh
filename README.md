# node-command-info.nix.sh

Library and executable for getting information about a command on linux/bash like systems.

## Installation

`npm i @f0c1s/command-info.nix.sh`

## Execution

`npx @f0c1s/command-info.nix.sh <cmd: ip|ifconfig|etc>`

or

```javascript

const {
    getWhich,
    getType,
    getWhereis,
    getCommandV,
    getCommandv
} = require('@f0c1s/command-info.nix.sh');

const cmd = 'ip';

console.table([getWhich, getType, getWhereis, getCommandV, getCommandv].map(fn => fn(cmd)));

```
