import Model from './model'
import Project from '@/models/project'

class Task extends Model {
    constructor (params) {
        super(params)
        this.text = params.text
        this.completed = params.completed
        this.projectId = params.projectId

        if (this.project) {
            this.project.addTask(this)
        }
    }

    get project () {
        const exists = typeof this.projectId !== 'undefined'
        return exists ? Project.find(this.projectId) : null
    }
}

Task.storeKey = 'tasks'


export default Task