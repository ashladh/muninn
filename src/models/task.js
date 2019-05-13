import Model from './model'
import Project from '@/models/project'
import Contact from '@/models/contact'

class Task extends Model {

    constructor (params) {
        super(params)

        this.belongsTo(Project, params.projectId)
        this.belongsTo(Contact, params.contactId)

        this.text = params.text
        this.completed = params.completed
    }

}

Task.storeKey = 'tasks'


export default Task