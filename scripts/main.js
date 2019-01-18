/* eslint-disable */
var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: '', done: false },
      ],
      newTodo: '',
      dateSave: '',
      displayDone: true
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({text: this.newTodo, done: false})
            this.newTodo = ''
            this.dateSave = 'last updated ' + new Date().toLocaleString()
        },
        getDoneCount: function () {
            var doneCount = 0
            for (var todo of this.todos) {
                if (todo.done) {
                    doneCount++
                }
            }
            return doneCount
        }
    }
  })