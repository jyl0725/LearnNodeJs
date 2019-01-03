console.log('starting app');

const fs = require('fs');
const note = require('./note.js');
const yargs = require('yargs')
const _ = require('lodash');

const argv = yargs.argv;
let command = argv._[0];

console.log('process', process.argv);
console.log('yargs', argv);
console.log('Command', command)

if(command === 'add'){
  note.addNote(argv.title, argv.body)
}else if(command === 'list'){
  note.getAll();
}else if(command === 'read'){
  note.getNote(argv.title);
}else if(command === 'remove'){
  note.remove(title);
}else{
  console.log('Command not recongized')
}
