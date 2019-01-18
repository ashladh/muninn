/* eslint-disable */
moment.locale('fr')

var app = new Vue({

    el: '#app',
    data: {
      notes: [
        { text: '', done: false },
      ],
      newNote: '',
      dateSave: ''
    },



    methods: {
        addNewNote: function () {
            var date = moment()
            this.notes.push({text: this.newNote, done: false})
            this.newNote= ''
            this.dateSave = 'mis à jour le ' + date.format('lll')
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