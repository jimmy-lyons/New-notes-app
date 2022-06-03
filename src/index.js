const NotesAPI = require('../notesAPI');
const NotesModel = require('./notesModel');
const NotesView = require('../notesView')

console.log("The notes app is running");

const api = new NotesAPI();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
