/* eslint-disable */
var globalNotes = []

function saveNotesToLocalStorage (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


function importNotes () {
    var stringNotes = localStorage.getItem('notes')
    var notes = stringNotes ? JSON.parse(stringNotes) : []

    notes.forEach(function (noteData) {
        globalNotes.push(new Note(noteData))
    })
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


function findNote (id) {
    var foundNote
    globalNotes.forEach(function (note) {
        if (note.id === id) {
           foundNote = note
        }
    })
    return foundNote
}


export default {
    globalNotes,
    saveNotesToLocalStorage,
    importNotes,
    getNextId,
    findNote
}