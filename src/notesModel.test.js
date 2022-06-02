const NotesModel = require('./notesModel');

describe('notesModel', () => {

  const model = new NotesModel();

  describe('#getNotes', () => {
    it('returns an empty array with no notes', () => {
      expect(model.getNotes()).toEqual([]);
    })

    it('returns the notes present in the array', () => {
      model.addNote('Buy paracetamol');
      model.addNote('Buy baby clothes');
      expect(model.getNotes()).toEqual(['Buy paracetamol', 'Buy baby clothes']);
    })
    
    it('return an empty array when the notes are reset', () => {
      model.reset();
      expect(model.getNotes()).toEqual([]);
    })
  })

})