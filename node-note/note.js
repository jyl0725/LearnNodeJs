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
  console.log('Fetching note', title)
}

let remove = (title) => {
  console.log('Removing', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  remove,
};
