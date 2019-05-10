import Model from './model'
import Task from './task'


class Contact extends Model {
    constructor (params) {
        super(params)
        this.lastname = params.lastname
        this.firstname = params.firstname
        this.email = params.email
        this.phone = params.phone
        this.misc = params.misc
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
}

Contact.storeKey = 'contacts'


export default Contact