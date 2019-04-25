import Model from './model'
import Task from './model'

class Project extends Model {
    constructor (params) {
        super(params)
        this.title = params.title
        this.content = params.content
        this.taskIds = []
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

Project.storeKey = 'projects'


export default Project