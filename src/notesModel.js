class NotesModel {
  constructor() {
    this.notes = [];
  }

  setNotes(jsonData) {
    this.notes = jsonData;
  }

  // ES6 one line functions below
  getNotes = () => this.notes;

  addNote(note) {
    this.notes.push(note);
  }

  reset = () => this.notes = [];
}

module.exports = NotesModel;