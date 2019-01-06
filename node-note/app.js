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
    note.logNote(noted);
  }else{
    console.log('Note title already exist');
  }
}else if(command === 'list'){
  note.getAll();
}else if(command === 'read'){
  singleNote = note.getNote(argv.title);
  if(singleNote){
    console.log('Note retrieved');
    note.logNote(singleNote);
  }else{
    console.log(`Note doesn't exist`)
  }
}else if(command === 'remove'){
  let noteRemoved = note.remove(argv.title);
  let message = noteRemoved ? 'Note Removed' : 'You are trying to remove an non-existent note'
  console.log(message)
}else{
  console.log('Command not recongized')
}
