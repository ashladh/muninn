import Vue from 'vue'
import Router from 'vue-router'

import NotesIndex from '@/components/notes/index'
import NoteShow from '@/components/notes/show'
import NoteEdit from '@/components/notes/edit'
import NoteNew from '@/components/notes/new'

import DevTools from '@/components/devtools/dev_tools'

import ContactsIndex from '@/components/contacts/index'
import ContactEdit from '@/components/contacts/edit'
import ContactShow from '@/components/contacts/show'
import ContactNew from '@/components/contacts/new'

import ProjectsIndex from '@/components/projects/index'
import ProjectEdit from '@/components/projects/edit'
import ProjectShow from '@/components/projects/show'
import ProjectNew from '@/components/projects/new'

import TasksIndex from '@/components/tasks/index'
import TaskEdit from '@/components/tasks/edit'
import TaskShow from '@/components/tasks/show'
import TaskNew from '@/components/tasks/new'




Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Homepage',
        component: NotesIndex
    },

    {
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
        path:'/notes/new',
        name: 'NoteNew',
        component: NoteNew
    },

    {
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
        path:'/contacts/new',
        name: 'ContactNew',
        component: ContactNew
    },

    {
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
    }, {
        path:'/projects/new',
        name: 'ProjectNew',
        component: ProjectNew
    },

    {
        path:'/tasks',
        name: 'TasksIndex',
        component: TasksIndex
    }, {
        path:'/tasks/:id/edit',
        name: 'TaskEdit',
        component: TaskEdit
    }, {
        path:'/tasks/:id',
        name: 'TaskShow',
        component: TaskShow
    }, {
        path:'/tasks/new',
        name: 'TaskNew',
        component: TaskNew
    },

    {
        path:'/devtools',
        name: 'DevTools',
        component: DevTools
    }]
})

