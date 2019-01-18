/* eslint-disable */
var app = new Vue({
    el: '#app',
    data: {
      notes: [
        { text: '', done: false },
      ],
      newNote: '',
      dateSave: '',
      displayDone: true
    },
    methods: {
        addNewNote: function () {
            this.notes.push({text: this.newNote, done: false})
            this.newNote= ''
            this.dateSave = 'last updated ' + new Date().toLocaleString()
        },
        /* getDoneCount: function () {
            var doneCount = 0
            for (var todo of this.todos) {
                if (todo.done) {
                    doneCount++
                }
            }
            return doneCount
        }
        */
    }
  })