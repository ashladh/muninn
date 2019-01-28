import Vue from 'vue'
import Router from 'vue-router'

import NotesIndex from '@/components/NotesIndex'
import NoteShow from '@/components/NoteShow'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'NotesIndex',
        component: NotesIndex
    }, {
        path: '/notes/:id',
        name: 'note',
        component: NoteShow
    }]
})

