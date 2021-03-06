class NotesView {
  constructor(model, api) {
    this.api = api
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    this.noteButtonEl = document.querySelector('#note-button');
    this.noteButtonEl.addEventListener('click', () => {
      console.log(document.querySelector('#new-note').value);
      let note = this.api.createNote(document.querySelector('#new-note').value);
      this.model.addNote(note)
      this.api.loadNotes(notes => model.setNotes(notes))
      this.displayNotes();
      document.querySelector('#new-note').value = "";
    })
  }
  
  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
    
    const notes = this.model.getNotes()
    
    // For each note, create and append a new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  };

};

module.exports = NotesView;