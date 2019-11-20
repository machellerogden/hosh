#!/usr/bin/env node
'use strict';

if (parseInt(process.versions.node.split('.')[0]) < 12) throw new Error('Hosh requires Node.js v12 or newer.');

if (!process.stdin.isTTY) {
    console.error('hosh can only run as TTY for the time being.');
    process.exit(1);
}

process.stdin.setRawMode(true);

const os = require('os');
const pty = require('node-pty');
const { columns:cols, rows } = require('term-size');

const ptyProcess = pty.spawn('bash', [ '-l' ], {
    name: 'xterm-color',
    cols,
    rows,
    cwd: process.env.HOME,
    env: process.env
});

ptyProcess.pipe(process.stdout);
process.stdin.pipe(ptyProcess);

//const Vorpal = require('vorpal');
//const PDN = require('pdn');
//const vorpal = Vorpal();

//vorpal
    //.command('echo [input...]', 'echo given args')
    //.action(function (args, callback) {
        //this.log(args.input);
        //callback();
    //});
//vorpal
    //.delimiter('@>')
    //.show();
