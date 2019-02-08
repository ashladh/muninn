
// FIXME Move this
let storage
if (typeof localStorage === 'undefined') {
    storage = {
        getItem (key) {
            return storage.items[key]
        },

        setItem (key, value) {
            storage.items[key] = value
        },

        items: {}
    }
} else {
    storage = localStorage
}

function addIdCapabilities (model, params, key) {
    if('id' in params) {
        model.id = params.id
    }
    else {
        model.id = getNextId(key)
    }
}

function getNextId (key) {
    var currentId = storage.getItem(key + 'CurrentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    storage.setItem(key + 'CurrentId', currentId)
    return currentId
}

export default addIdCapabilities