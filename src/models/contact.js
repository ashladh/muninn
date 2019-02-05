import store from '../store'
import addLocalStorageCapabilities from './local_storage_capabilities'
import addTimestampCapabilities from './timestamp_capabilities'

var attributes = ['lastname', 'firstname', 'email', 'phone', 'misc']

function Contact (params) {
    this.lastname = params.lastname
    this.firstname = params.firstname
    this.email = params.email
    this.phone = params.phone
    this.misc = params.misc
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    addTimestampCapabilities(this, params)
}


Contact.prototype.update = function () {
    this.touch()
}

Contact.delete = function (contact) {
    var index = store.contacts.indexOf(contact)
    store.contacts.splice(index, 1)
    Contact.saveToLocalStorage(store.contacts)
}

Contact.find = function (id) {
    var foundContact

    store.contacts.forEach(function (contact) {
        if (contact.id === id) {
           foundContact = contact
        }
    })

    return foundContact
}

addLocalStorageCapabilities(Contact, 'contacts')


function getNextId () {
    var currentId = localStorage.getItem('currentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    localStorage.setItem('currentId', currentId)
    return currentId
}



export default Contact