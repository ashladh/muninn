import Vue from 'vue'
import App from './app.vue'
import Note from './models/note'
import router from './router'
import {DateTime} from 'luxon'
import showdown from 'showdown'
import Contact from './models/contact'
import Project from './models/project'
import Task from './models/task'

Vue.config.productionTip = false

Vue.filter('formatDate', function (date) {
  return DateTime.fromISO(date).toRelative()
})

Vue.directive('markdown-to-html', function(el) {
  var markdown = el.innerHTML
  var converter = new showdown.Converter()
  el.innerHTML = converter.makeHtml(markdown)
})

new Vue({
  router,
  created: function () {
    Note.importFromLocalStorage()
    Contact.importFromLocalStorage()
    Project.importFromLocalStorage()
    Task.importFromLocalStorage()
  },
  render: h => h(App),
}).$mount('#app')


