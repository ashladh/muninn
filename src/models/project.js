import Model from './model'
import Task from './task'
import Contact from './contact'

class Project extends Model {
    constructor (params) {
        super(params)
        this.title = params.title
        this.content = params.content
        this.taskIds = []
        this.contactIds = []
    }


    addTask (task) {
        if (!this.taskIds.includes(task.id)) {
            this.taskIds.push(task.id)
        }
    }


    get tasks () {
        return this.taskIds.map(function (taskId) {
            return Task.find(taskId)
        })
    }

    addContact (contact) {
        if (!this.contactIds.includes(contact.id)) {
            this.contactIds.push(contact.id)
        }
    }


    get contacts () {
        return this.contactIds.map(function (contactId) {
            return Contact.find(contactId)
        })
    }
}

Project.storeKey = 'projects'


export default Project