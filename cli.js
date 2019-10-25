#!/usr/bin/env node

// Use YARGS to parse command line
const argv = require('yargs')
    .command('', 'Generates a Build Info JSON file')
    .option('file', {
        type: 'string',
        description: 'Filename to write to',
    })
    .option('sha', {
        type: 'string',
        description: 'SHA of the commit'
    })
    .option('build', {
        type: 'string',
        description: 'The build number'
    })
    .option('comment', {
        type: 'string',
        description: 'Any comment to associate'
    })
    .option('author', {
        type: 'string',
        description: 'Author of commit'
    })
  .argv;

// Use file & path libraries
const fs = require('fs');
const path = require('path');

// Get the output file name
var fileName = argv.file;
if (!fileName)
    fileName = "build-info.json";

// Object to output
var info = {
    "sha" : argv.sha,
    "build" : argv.build,
    "buildTime" : new Date().toISOString(),
    "comment" : argv.comment,
    "author" : argv.author
}

// Get full filename
filename = path.resolve(path.join(process.cwd(), fileName));

// Write to file
fs.writeFile(filename, JSON.stringify(info, null, 2), function(err) {

    if(err) {
        return console.log(err);
    }

    console.log(`${fileName} generated`);
}); 

