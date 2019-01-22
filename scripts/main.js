/* eslint-disable */
moment.locale('fr')

var app = new Vue({

    el: '#app',
    data: {
      notes: [],
      newNote: '',
      displayNewNoteForm: false,
      displayEditMode: false,
      editedNote: false
    },

    methods: {
        addNote: function () {
            var date = moment()
            var updatedAt = date.format('lll')
            
            var note = {text: this.newNote, updatedAt: updatedAt}

            this.notes.push(note)
            saveNotesToLocalStorage(this.notes)
            this.newNote= ''
            this.displayNewNoteForm = false
        },
        markdownToHtml: function (markdown) {
            var converter = new showdown.Converter()
            return converter.makeHtml(markdown)
        },
        displayNoteForm: function () {
            this.displayNewNoteForm = true
        },
        saveNote: function () {
            var date = moment()
            var updatedAt = date.format('lll')

            this.editedNote.updatedAt = updatedAt
            this.displayEditMode = false
            this.editedNote = false
            saveNotesToLocalStorage(this.notes)
        },
        editNote: function (note) {
            this.displayEditMode = true
            this.editedNote = note
        }

    }

})


function saveNotesToLocalStorage (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

var stringNotes = localStorage.getItem('notes')
app.notes = stringNotes ? JSON.parse(stringNotes) : []