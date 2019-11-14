#!/usr/bin/env node

'use strict';

if (parseInt(process.versions.node.split('.')[0]) < 12) throw new Error('Hosh requires Node.js v12 or newer.');

const Vorpal = require('vorpal');
const PDN = require('pdn');
const vorpal = Vorpal();

vorpal
    .command('echo [input...]', 'echo given args')
    .action(function (args, callback) {
        this.log(args.input);
        callback();
    });

vorpal
    .delimiter('@>')
    .show();
