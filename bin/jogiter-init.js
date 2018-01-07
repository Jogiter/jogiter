#!/usr/bin/env node

const download = require('download-git-repo');
const program = require('commander');
const chalk = require('chalk');

program.parse(process.argv);

program.on('--help', () => {
    console.log('  Examples:');
    console.log();
    console.log(chalk.gray('    # download a git repository to a destination folder'));
    console.log('    $ jogiter init username/repo my-project');
    console.log();
});

function help () {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
}
help()

download(program.args[0], program.args[1], err => {
    if (err) {
        console.log(err);
    }
    process.exit(0);
});
