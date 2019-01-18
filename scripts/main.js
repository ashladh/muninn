/* eslint-disable */
moment.locale('fr')

var app = new Vue({

    el: '#app',
    data: {
      notes: [
        { text: '' , updatedAt: ''},
      ],
      newNote: ''
    },



    methods: {
        addNote: function () {
            var date = moment()

            this.updatedAt = ' mis à jour le ' + date.format('lll')
            this.notes.push({text: this.newNote, updatedAt: this.updatedAt})
            this.newNote= ''
        }
    }
  })