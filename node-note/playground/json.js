// let obj = {
//   name: 'Andrew'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj)
// console.log(stringObj)

// let personString = '{"name": "Andrew", "age" : 25}';
// var person = JSON.parse(personString);
// console.log(typeof person)
// console.log(person)

const fs = require('fs');

let originalNote = {
  title: 'some title',
  body: 'some body',
}

let originalNoteObj = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteObj);

let noteString = fs.readFileSync('notes.json')

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title;
