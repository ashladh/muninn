import Vue from 'vue'
import Router from 'vue-router'

import NotesIndex from '@/components/NotesIndex'
import NoteShow from '@/components/NoteShow'
import NoteEdit from '@/components/NoteEdit'
import ContactsIndex from '@/components/ContactsIndex'
import ContactEdit from '@/components/ContactEdit'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Homepage',
        component: NotesIndex
    }, {
        path:'/notes',
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
    }, {
        path: '/contacts',
        name: 'ContactsIndex',
        component: ContactsIndex
    }, {
        path: '/contacts/:id/edit',
        name: 'ContactEdit',
        component: ContactEdit
    }]
})

