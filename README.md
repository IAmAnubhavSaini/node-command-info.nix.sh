# node-command-info.nix.sh

Library and executable for getting information about a command on linux/bash like systems.

## Installation

For command execution: `npx @f0c1s/command-info.nix.sh` or `npm i -g @f0c1s/command-info.nix.sh`

As library; `npm i @f0c1s/command-info.nix.sh`

## Execution

As command

`npx @f0c1s/command-info.nix.sh <cmd: ip|ifconfig|etc>`

or

`_cmd ip`

or

`command_info ip`

As library

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
