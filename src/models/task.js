import Model from './model'


class Task extends Model {
    constructor (params) {
        super(params)
        this.text = params.text
        this.completed = params.completed
    }
}

Task.storeKey = 'tasks'


export default Task