import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'
import store from '../store'


class Model {

    constructor (params) {
        addIdCapabilities(this, params, this.storeKey)
        addTimestampCapabilities(this, params)
    }

    get storeKey () {
        return this.constructor.storeKey
    }

    update () {
        this.touch()
    }

    remove () {
        var index = store[this.storeKey].indexOf(this)

        if (index != -1) {
            store[this.storeKey].splice(index, 1)
            this.constructor.saveToLocalStorage()
        }
    }


    static find (id) {
        var foundModel
        store[this.storeKey].forEach(function (model) {
            if (model.id === id) {
               foundModel = model
            }
        })

        return foundModel
    }

    static importFromLocalStorage () {
        var storeKey = this.storeKey
        var Constructor = this

        var stringModels = localStorage.getItem(storeKey)
        var models = stringModels ? JSON.parse(stringModels) : []

        models.forEach(function (data) {
            store[storeKey].push(new Constructor(data))
        })
    }

    static saveToLocalStorage () {
        localStorage.setItem(this.storeKey, JSON.stringify(store[this.storeKey]))
    }

}


export default Model