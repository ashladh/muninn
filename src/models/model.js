import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'
import store from '../store'
import utils from '../utils'


class Model {

    constructor (params) {
        addIdCapabilities(this, params, this.storeKey)
        addTimestampCapabilities(this, params)
    }

    get storeKey () {
        return this.constructor.storeKey
    }

    forEdition () {
        return Object.assign({}, this)
    }

    update (params) {
        Object.assign(this, params)
        this.touch()
    }

    remove () {
        var index = store[this.storeKey].indexOf(this)

        if (index != -1) {
            store[this.storeKey].splice(index, 1)
            this.constructor.saveToLocalStorage()
        }
    }

    saveToLocalStorage () {
        store[this.storeKey].push(this)
        this.constructor.saveToLocalStorage()
    }

    static find (id) {
        var foundModel
        store[this.storeKey].forEach(function (model) {
            if (model.id === Number(id)) {
               foundModel = model
            }
        })

        return foundModel
    }

    static importFromLocalStorage () {
        var storeKey = this.storeKey
        var Constructor = this

        var stringModels = utils.storage.getItem(storeKey)
        var modelsData = stringModels ? JSON.parse(stringModels) : []

        modelsData.forEach(function (modelData) {
            store[storeKey].push(new Constructor(modelData))
        })
    }

    static saveToLocalStorage () {
        utils.storage.setItem(this.storeKey, JSON.stringify(store[this.storeKey]))
    }

}


export default Model