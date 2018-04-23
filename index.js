#!/usr/bin/env node

'use strict';
const meow = require('meow');
const download = require('download-git-repo');

let repository;
let projectName;
const cli = meow(
  `
  Usage: jogiter [username/repo] [project-name]

  Options:

    --help, -h        show usage information
    --version, -V     show the version text

  Examples:

    # download a git repository to a destination folder
    $ jogiter Jogiter/init my-project

  Default:

    # download Jogiter/init to a destination folder
    $ jogiter my-project
`,
  {
    flags: {
      version: {
        type: 'boolean',
        alias: 'V'
      }
    },
    description: false
  }
);

if (cli.input.length < 2) {
  cli.showHelp();
  process.exit(0);
}

if (cli.input.length === 1) {
  repository = 'Jogiter/init';
  projectName = cli.input[0];
} else {
  repository = cli.input[0];
  projectName = cli.input[1];
}

download(repository, projectName, err => {
  if (err) {
    console.log(err);
  }
  process.exit(0);
});
