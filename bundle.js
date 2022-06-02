(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notesList = [];
        }
        getNotes() {
          return this.notesList;
        }
        addNote(note) {
          this.notesList.push(note);
        }
        reset() {
          this.notesList = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        displayNotes() {
          var notesArray = this.model.getNotes();
          notesArray.forEach((note) => {
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

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_view();
  console.log("The notes app is running");
  var model = new NotesModel();
  var view = new NotesView(model);
  model.addNote("A first note");
  model.addNote("Another one");
  view.displayNotes();
})();
