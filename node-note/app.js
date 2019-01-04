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
  let noted = note.addNote(argv.title, argv.body);
  if(noted){
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${noted.title}`);
    console.log(`Body: ${noted.body}`);
  }else{
    console.log('Note title already exist');
  }
}else if(command === 'list'){
  note.getAll();
}else if(command === 'read'){
  note.getNote(argv.title);
}else if(command === 'remove'){
  note.remove(title);
}else{
  console.log('Command not recongized')
}
