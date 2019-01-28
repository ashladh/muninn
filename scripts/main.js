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
            dataNoteShow.note = note
            app.currentRoute = 'noteShow'
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

var koin = {
    template: '<h1>Koin</h1>'
}

var noteShow = {
    template: document.getElementById('display-note-template').innerHTML,
    computed: {
        note: function () {
            return findNote(this.$route.params.id)
        }
    }
}



var homepage = {
    data: function() {
        return {
            notes: globalNotes,
            newNote: '',
            displayNewNoteForm: false,
            displayEditMode: false,
            editedNote: false,
            displayMode: false,
            displayedNote: false
        }
    },

    template: document.getElementById('homepage-template').innerHTML,

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
            app.currentRoute = 'noteShow'
        },

        goToKoin: function () {
            app.currentRoute = 'koin'
        }
    }
}

/*var routes = {
    homepage: homepage,
    koin: koin,
    noteShow: noteShow
}
*/

const routes = [
    { path: '/', component: homepage },
    { path: '/notes/:id', name: 'note', component: noteShow },
    { path: '/koin', component: koin }
]

const router = new VueRouter({
    routes: routes
})

Vue.directive('markdown-to-html', function(el) {
    var markdown = el.innerHTML
    var converter = new showdown.Converter()
    el.innerHTML = converter.makeHtml(markdown)
})

Vue.filter('formatDate', function (date) {
    return moment(date).format('lll')
})

const app = new Vue({
    router: router
}).$mount('#app')


importNotes()
