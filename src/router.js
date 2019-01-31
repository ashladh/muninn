import Vue from 'vue'
import Router from 'vue-router'

import NotesIndex from '@/components/pages/NotesIndex'
import NoteShow from '@/components/pages/NoteShow'
import NoteEdit from '@/components/pages/NoteEdit'
import ContactsIndex from '@/components/pages/ContactsIndex'
import ContactEdit from '@/components/pages/ContactEdit'
import ContactShow from '@/components/pages/ContactShow'
import ProjectsIndex from '@/components/pages/ProjectsIndex'
import ProjectEdit from '@/components/pages/ProjectEdit'
import ProjectShow from '@/components/pages/ProjectShow'




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
    }, {
        path: '/contacts/:id',
        name: 'ContactShow',
        component: ContactShow
    }, {
        path:'/projects',
        name: 'ProjectsIndex',
        component: ProjectsIndex
    }, {
        path:'/projects/:id/edit',
        name: 'ProjectEdit',
        component: ProjectEdit
    }, {
        path:'/projects/:id',
        name: 'ProjectShow',
        component: ProjectShow
    }]
})

