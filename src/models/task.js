import Model from './model'
import Project from '@/models/project'
import Contact from '@/models/contact'

class Task extends Model {
    constructor (params) {
        super(params)
        this.text = params.text
        this.completed = params.completed
        this.projectId = params.projectId
        this.contactId = params.contactId

        if (this.project) {
            this.project.addTask(this)
        }

        if (this.contact) {
            this.contact.addTask(this)
        }
    }

    get project () {
        const exists = typeof this.projectId !== 'undefined'
        return exists ? Project.find(this.projectId) : null
    }

    get contact () {
        const exists = typeof this.contactId !== 'undefined'
        return exists ? Contact.find(this.contactId) : null
    }
}

Task.storeKey = 'tasks'


export default Task