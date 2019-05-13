import Model from './model'
import Task from './task'
import Contact from './contact'


class Project extends Model {
    constructor (params) {
        super(params)

        this.hasMany(Task, params.taskIds)
        this.hasMany(Contact, params.contactIds)

        this.title = params.title
        this.content = params.content
    }
}


Project.storeKey = 'projects'


export default Project