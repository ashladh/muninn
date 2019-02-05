import store from '../store'
import addLocalStorageCapabilities from './local_storage_capabilities'
import addTimestampCapabilities from './timestamp_capabilities'

function Note (params) {
    this.text = params.text
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    addTimestampCapabilities(this, params)
}


Note.prototype.update = function () {
    this.touch()
}


Note.prototype.remove = function () {
    var index = store.notes.indexOf(this)

    if (index != -1) {
        store.notes.splice(index, 1)
        Note.saveToLocalStorage(store.notes)
    }
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

addLocalStorageCapabilities(Note, 'notes')



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