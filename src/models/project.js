import Model from './model'


class Project extends Model {
    constructor (params) {
        super(params)
        this.title = params.title
        this.content = params.content
    }
}

Project.storeKey = 'projects'


export default Project