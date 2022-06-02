class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  displayNotes() {
    var notesArray = this.model.getNotes();
    notesArray.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

}

module.exports = NotesView;