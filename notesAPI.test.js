const NotesAPI = require('./notesAPI');
const NotesModel = require('./src/notesModel');

require('jest-fetch-mock').enableMocks();

describe('NotesAPI class', () => {
  it('calls fetch and loads notes', async () => {
    
    const api = new NotesAPI();
    fetch.mockResponseOnce(JSON.stringify({
      note1: "this is the first note",
      note2: "this is the second note"
    }));

    const model = new NotesModel();

    api.loadNotes((notes) => {
      model.setNotes(notes);
      let notesArray = model.getNotes();
      expect(notesArray.note1).toEqual("this is the first note");
      expect(notesArray.note2).toEqual("this is the second note");
    });
  });

  it('adds new notes', async () => {

    const api = new NotesAPI();
  });
});