import store from '../store'

function addLocalStorageCapabilities (Model, key) {
    Model.importFromLocalStorage = function () {
        var stringModels = localStorage.getItem(key)
        var models = stringModels ? JSON.parse(stringModels) : []

        models.forEach(function (data) {
            store[key].push(new Model(data))
        })
    }
    
    
    Model.saveToLocalStorage = function () {
        localStorage.setItem(key, JSON.stringify(store[key]))
    }
}

export default addLocalStorageCapabilities