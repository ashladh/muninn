import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'
import store from '../store'
import utils from '../utils'
import inflection from 'inflection'



class Model {

    constructor (params) {
        addIdCapabilities(this, params, this.storeKey)
        addTimestampCapabilities(this, params)
    }


    get storeKey () {
        return this.constructor.storeKey
    }


    belongsTo (AssociatedModel, associatedId) {
        const modelName = AssociatedModel.name
        const property = inflection.camelize(modelName, true)
        const propertyId = property + 'Id'
        this[propertyId] = associatedId

        Object.defineProperty(this, property, {
            get () {
                const exists = typeof this[propertyId] !== 'undefined'
                return exists ? AssociatedModel.find(this[propertyId]) : null
            }
        })

        if (this[property]) {
            this[property]['add' + inflection.capitalize(this.constructor.name)](this.id)
        }
    }


    hasMany (AssociatedModel, associatedIds = []) {
        const modelName = AssociatedModel.name
        const property = inflection.camelize(modelName, true)
        const propertyIds = property + 'Ids'
        this[propertyIds] = Array.from(associatedIds)

        Object.defineProperty(this, inflection.pluralize(property), {
            get () {
                return this[propertyIds].map(function (modelId) {
                    return AssociatedModel.find(modelId)
                })
            }
        })

        this['add' + inflection.capitalize(property)] = function (modelId) {
            if (!this[propertyIds].includes(modelId)) {
                this[propertyIds].push(modelId)
            }
        }

        this['remove' + inflection.capitalize(property)] = function (modelId) {
            const index = this[propertyIds].indexOf(modelId)
            if (index !== -1) {
                this[propertyIds].splice(index, 1)
            }
        }
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