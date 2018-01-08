#!/usr/bin/env node

require('commander')
    .version(require('../package').version)
    .usage('<command> [username/repo] [project-name]')
    .command('init', 'download a git repository to a destination folder')
    .parse(process.argv);
