import Vue from 'vue'
import Router from 'vue-router'

import NotesIndex from '@/components/NotesIndex'
import NoteShow from '@/components/NoteShow'
import NoteEdit from '@/components/NoteEdit'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'NotesIndex',
        component: NotesIndex
    }, {
        path: '/notes/:id',
        name: 'NoteShow',
        component: NoteShow
    }, {
        path: '/notes/:id/edit',
        name: 'NoteEdit',
        component: NoteEdit
    }]
})

