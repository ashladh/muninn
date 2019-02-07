import store from '../../store'

function addModelCapabilities (Model, key) {
    Model.prototype.update = function () {
        this.touch()
    }
    

    Model.prototype.remove = function () {
        var index = store[key].indexOf(this)

        if (index != -1) {
            store[key].splice(index, 1)
            Model.saveToLocalStorage(store[key])
        }
    }


    Model.find = function (id) {
        var foundModel

        store[key].forEach(function (model) {
            if (model.id === id) {
               foundModel = model
            }
        })

        return foundModel
    }
}

export default addModelCapabilities