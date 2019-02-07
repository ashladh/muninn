import Model from './model'


class Note extends Model {
    constructor (params) {
        super(params)
        this.text = params.text
    }
}

Note.storeKey = 'notes'


export default Note