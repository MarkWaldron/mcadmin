#!/usr/bin/env node
 
var program = require('commander');
const version = require('./package.json').version;


program
  .version(version);

program
  .command('install [version]')
  .action((version) => {
    if (!version) version = 'latest';
  });
 
program
  .command('backup')
  .action(() => {

  });

program
  .command('remove')
  .action(() => {

  });

program
  .command('upgrade [version]')
  .action((version) => {
    if(!version) version = 'latest'
  })


program.parse(process.argv);