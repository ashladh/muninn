/* eslint-disable */
moment.locale('fr')
var notePreviewTemplate = document.getElementById('note-preview-template').innerHTML

Vue.component('note-preview', {
    props: ['note'],

    template: notePreviewTemplate,
    methods: {
        markdownToHtml: function (markdown) {
            return app.markdownToHtml(markdown)
        },
        editNote: function (note) {
            app.editNote(note)
        }
    }
})

Vue.component('fa-icon', {
    props: ['name'],
    data: function () {
        return {
            prefix: 'far',
        }
    },
    computed: {
        iconName: function () {
            return 'fa-' + this.name
        }
    },
    template: '<span v-bind:class="[prefix, iconName]"></span>'

})

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