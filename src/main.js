import Vue from 'vue'
import App from './App.vue'
import Note from './models/note'
import router from './router'
import {DateTime} from 'luxon'
import showdown from 'showdown'

Vue.config.productionTip = false

new Vue({
  router,
  mounted: function () {
    Note.importFromLocalStorage()
  },
  render: h => h(App),
}).$mount('#app')


Vue.filter('formatDate', function (date) {
    return DateTime.fromISO(date).toRelative()
})

Vue.directive('markdown-to-html', function(el) {
    var markdown = el.innerHTML
    var converter = new showdown.Converter()
    el.innerHTML = converter.makeHtml(markdown)
})