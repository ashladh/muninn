import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'
import store from '../store'

var key = 'contacts'

class Model {
    constructor (params) {
        addIdCapabilities(this, params, 'contacts')
        addTimestampCapabilities(this, params)
    }

    update () {
        this.touch()
    }

    remove () {
        var index = store[key].indexOf(this)

        if (index != -1) {
            store[key].splice(index, 1)
            Model.saveToLocalStorage(store[key])
        }
    }

    static find (id) {
        var foundModel

        store[key].forEach(function (model) {
            if (model.id === id) {
               foundModel = model
            }
        })
    
        return foundModel
    }
}

export default Model