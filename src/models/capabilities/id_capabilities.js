function addIdCapabilities (model, params, key) {
    if('id' in params) {
        model.id = params.id
    }
    else {
        model.id = getNextId(key)
    }
}

function getNextId (key) {
    var currentId = localStorage.getItem(key + 'CurrentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    localStorage.setItem(key + 'CurrentId', currentId)
    return currentId
}

export default addIdCapabilities