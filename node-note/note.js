console.log('starting note.js')

let addNote = (title, body) => {
  console.log('Adding note', title, body);
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
