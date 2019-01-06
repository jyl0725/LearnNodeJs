console.log('starting note.js')

const fs = require('fs');

let fetchNotes = () =>{
  try{
    let noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
  } catch(e){
    return [];
  }
}

let saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  console.log('All Notes', )
}

let getNote = (title) => {
  let notes = fetchNotes();
  let note = notes.filter(note => note.title === title);
  return note[0];
}

let remove = (title) => {
  let notes = fetchNotes();
  let filtered = notes.filter(note => note.title !== title);

  saveNotes(filtered);

  return notes.length !== filtered.length;

}

let logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  remove,
  logNote,
};
