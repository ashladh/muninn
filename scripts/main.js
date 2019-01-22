/* eslint-disable */
moment.locale('fr')

var app = new Vue({

    el: '#app',
    data: {
      notes: [],
      newNote: '',
      displayNewNoteForm: false
    },

    methods: {
        addNote: function () {
            var date = moment()

            var updatedAt = date.format('lll')

            var note = {text: this.newNote, updatedAt: updatedAt}
            this.notes.push(note)
            localStorage.setItem('notes', JSON.stringify(this.notes))
            this.newNote= ''
            this.displayNewNoteForm = false
        },
        markdownToHtml: function (markdown) {
            var converter = new showdown.Converter()
            return converter.makeHtml(markdown)
        },
        displayNoteForm: function () {
            this.displayNewNoteForm = true
        }
    }

})
var stringNotes = localStorage.getItem('notes')
app.notes = stringNotes ? JSON.parse(stringNotes) : []