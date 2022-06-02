class NotesAPI {

  // This code should work
  loadNotes = (callback) => {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }

}

module.exports = NotesAPI;