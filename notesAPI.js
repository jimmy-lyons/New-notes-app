class NotesAPI {

  // This code should work
  loadNotes = (callback) => {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  };

  // Really unsure if the below is gonna work:
  async createNote(noteText) {
    try {
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({note: noteText})
      })
      .then(response => response.json())
      .then(json => console.log(json));
    } catch (error) {
      console.log(error);
    };
  };
};

module.exports = NotesAPI;

// curl -XPOST http://localhost:3000/notes -H 'content-type: application/json' 
// -d '{ "content": "Remember to reflect on my progress this week!" }'

// async createNote(noteText) {
//   try {
//     const noteForm = await fetch('http://localhost:3000/notes', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({note: noteText})
//     });
//     // const note = await noteForm.json();
//     return noteForm.json();
//   } catch (error) {
//     console.log(error);
//   };
// };