/* eslint-disable */
moment.locale('fr')

var app = new Vue({

    el: '#app',
    data: {
      notes: [
        { text: '' , updatedAt: ''},
      ],
      newNote: '',
      displayNewNoteForm: false
    },



    methods: {
        addNote: function () {
            var date = moment()

            this.updatedAt = ' mis à jour le ' + date.format('lll')
            this.notes.push({text: this.newNote, updatedAt: this.updatedAt})
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