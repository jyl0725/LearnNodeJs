console.log('starting note.js')

const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try{
    let noteString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(noteString)
  } catch(e){

  }

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
