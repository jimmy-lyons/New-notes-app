/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./src/notesModel');
const NotesView = require('./notesView'); 

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');
    
    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('can add a note and see it displayed after clicking the add note button', () => {
    // ARRANGE ACT ASSERT
  document.body.innerHTML = fs.readFileSync('./index.html');
  const model = new NotesModel();
  const view = new NotesView(model);

  let newMessage = document.querySelector('#new-note');
  newMessage.value = "Millwall till I die";
  document.querySelector('#note-button').click();

  let notesArray = document.querySelectorAll('div.note')

  expect(notesArray[0].innerText).toEqual("Millwall till I die")
  })


  // This is the same as the first test!
  // it('clear the list of previous notes before displaying', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const model = new NotesModel();
  //   const view = new NotesView(model);
  //   model.addNote('one');
  //   model.addNote('two');

  //   view.displayNotes();
  //   view.displayNotes();

  //   expect(document.querySelectorAll('div.note').length).toEqual(2);
  // });

});
