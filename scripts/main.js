/* eslint-disable */
moment.locale('fr')
var notePreviewTemplate = document.getElementById('note-preview-template').innerHTML

Vue.component('note-preview', {
    props: ['note'],

    template: notePreviewTemplate,
    methods: {
        editNote: function (note) {
            app.editNote(note)
        },
        deleteNote: function (note) {
            app.deleteNote(note)
        },
        displayNote: function (note) {
            app.displayNote(note)
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


Vue.directive('format-date', function(el) {
    var rawDate = el.innerHTML
    el.innerHTML = moment(rawDate).format('lll')
})

Vue.directive('markdown-to-html', function(el) {
    var markdown = el.innerHTML
    var converter = new showdown.Converter()
    el.innerHTML = converter.makeHtml(markdown)
})

var app = new Vue({

    el: '#app',
    data: {
      notes: [],
      newNote: '',
      displayNewNoteForm: false,
      displayEditMode: false,
      editedNote: false,
      displayMode: false,
      displayedNote: false
    },

    methods: {
        addNote: function () {

            var note = new Note({text: this.newNote})


            this.notes.push(note)
            saveNotesToLocalStorage(this.notes)
            this.newNote= ''
            this.displayNewNoteForm = false
        },

        displayNoteForm: function () {
            this.displayNewNoteForm = true
        },
        saveNote: function () {
            this.editedNote.update()
            this.displayEditMode = false
            this.editedNote = false
            saveNotesToLocalStorage(this.notes)
        },
        editNote: function (note) {
            this.displayEditMode = true
            this.editedNote = note
        },
        deleteNote: function (note) {
           var index = this.notes.indexOf(note)
           this.notes.splice(index, 1)
           saveNotesToLocalStorage(this.notes)
        },
        displayNote: function (note) {
            this.displayMode = true
            this.displayedNote = note
        }

    }

})


function saveNotesToLocalStorage (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


function Note (params) {
    this.text = params.text
    if ('updatedAt' in params) {
        this.updatedAt = params.updatedAt
    }
    else {
        this.updatedAt = moment()
    }


}

Note.prototype.formattedDate = function () {
    return moment(this.updatedAt).format('lll')
}

Note.prototype.update = function () {
    this.updatedAt = moment()
}

function importNotes () {
    var stringNotes = localStorage.getItem('notes')
    var notes = stringNotes ? JSON.parse(stringNotes) : []

    notes.forEach(function (noteData) {
        app.notes.push(new Note(noteData))
    })
}

importNotes()
