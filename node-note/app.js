const fs = require('fs');
const note = require('./note.js');
const yargs = require('yargs')
const _ = require('lodash');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
}

const bodyOption = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b',
}

const argv = yargs
.command('add', 'add a new note', {
  title: titleOption ,
  body: bodyOption,
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title: titleOption
  })
.command('remove', 'Remove a note', {
  title: titleOption
})
.help()
.argv;
let command = argv._[0];

if(command === 'add'){
  let noted = note.addNote(argv.title, argv.body);
  if(noted){
    console.log('Note created');
    note.logNote(noted);
  }else{
    console.log('Note title already exist');
  }
}else if(command === 'list'){
  let notes = note.getAll();
  console.log(`Printing ${notes.length} note(s)`);
  notes.forEach(nt => note.logNote(nt))
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
