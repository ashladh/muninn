import store from '../store'
import {DateTime} from 'luxon'

function Note (params) {
    this.text = params.text
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    if ('updatedAt' in params) {
        this.updatedAt = params.updatedAt
    }
    else {
        this.updatedAt = DateTime.local().toISO()
    }
    if ('createdAt' in params) {
        this.createdAt = params.createdAt
    }
    else {
        this.createdAt = DateTime.local().toISO()
    }
}


Note.prototype.update = function () {
    this.updatedAt = DateTime.local().toISO()
}


Note.delete = function (note) {
    var index = store.notes.indexOf(note)
    store.notes.splice(index, 1)
    Note.saveToLocalStorage(store.notes)
}

Note.find = function (id) {
    var foundNote

    store.notes.forEach(function (note) {
        if (note.id === id) {
           foundNote = note
        }
    })

    return foundNote
}


Note.importFromLocalStorage = function () {
    var stringNotes = localStorage.getItem('notes')
    var notes = stringNotes ? JSON.parse(stringNotes) : []

    notes.forEach(function (noteData) {
        store.notes.push(new Note(noteData))
    })
}


Note.saveToLocalStorage = function () {
    localStorage.setItem('notes', JSON.stringify(store.notes))
}



function getNextId () {
    var currentId = localStorage.getItem('currentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    localStorage.setItem('currentId', currentId)
    return currentId
}


export default Note