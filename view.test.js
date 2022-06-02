/**
* @jest-environment jsdom
*/

const fs = require('fs');
const NotesView = require('./view');
const NotesModel = require('./notesModel');

describe('View', () => {
  beforeEach(() => {
    // We think that this is creating a fake web page just for tests.
    // I think this is a type of mocking?
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe('#displayNotes', () => {
    it('Displays zero notes when no notes have been added', () => {
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('A first note');
      model.addNote('Another one');
      view.displayNotes();

      expect(document.querySelectorAll('div.note').length).toEqual(2);
    })
  })
})
