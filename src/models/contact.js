import store from '../store'
import {DateTime} from 'luxon'

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


Contact.prototype.update = function () {
    this.updatedAt = DateTime.local().toISO()
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


Contact.importFromLocalStorage = function () {
    var stringContacts = localStorage.getItem('contacts')
    var contacts = stringContacts ? JSON.parse(stringContacts) : []

    contacts.forEach(function (contactData) {
        store.contacts.push(new Contact(contactData))
    })
}


Contact.saveToLocalStorage = function () {
    localStorage.setItem('contacts', JSON.stringify(store.contacts))
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


export default Contact