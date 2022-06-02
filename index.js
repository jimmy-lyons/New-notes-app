const NotesModel = require('./notesModel')
const NotesView = require('./view');

console.log('The notes app is running')
// console.log(notes.getNotes())

const model = new NotesModel();
const view = new NotesView(model);
model.addNote('A first note');
model.addNote('Another one');
view.displayNotes();

//test