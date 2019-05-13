import Model from './model'
import Task from './task'
import Project from './project'


class Contact extends Model {
    constructor (params) {
        super(params)
        
        this.hasMany(Task, params.taskIds)
        this.hasMany(Project, params.projectIds)

        this.lastname = params.lastname
        this.firstname = params.firstname
        this.email = params.email
        this.phone = params.phone
        this.misc = params.misc
    }
}

Contact.storeKey = 'contacts'


export default Contact