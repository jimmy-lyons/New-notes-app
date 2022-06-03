(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesAPI.js
  var require_notesAPI = __commonJS({
    "notesAPI.js"(exports, module) {
      var NotesAPI2 = class {
        loadNotes = (callback) => {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
        async createNote(noteText) {
          try {
            fetch("http://localhost:3000/notes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ note: noteText })
            }).then((response) => response.json()).then((json) => console.log(json));
          } catch (error) {
            console.log(error);
          }
          ;
        }
      };
      module.exports = NotesAPI2;
    }
  });

  // src/notesModel.js
  var require_notesModel = __commonJS({
    "src/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        setNotes(jsonData) {
          this.notes = jsonData;
        }
        getNotes = () => this.notes;
        addNote(note) {
          this.notes.push(note);
        }
        reset = () => this.notes = [];
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.api = api2;
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.noteButtonEl = document.querySelector("#note-button");
          this.noteButtonEl.addEventListener("click", () => {
            console.log(document.querySelector("#new-note").value);
            let note = this.api.createNote(document.querySelector("#new-note").value);
            this.model.addNote(note);
            this.api.loadNotes((notes) => model2.setNotes(notes));
            this.displayNotes();
            document.querySelector("#new-note").value = "";
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // src/index.js
  var NotesAPI = require_notesAPI();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running");
  var api = new NotesAPI();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
