
// FIXME Move this
import utils from '../../utils'

function addIdCapabilities (model, params, key) {
    if('id' in params) {
        model.id = params.id
    }
    else {
        model.id = getNextId(key)
    }
}

function getNextId (key) {
    var currentId = utils.storage.getItem(key + 'CurrentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    utils.storage.setItem(key + 'CurrentId', currentId)
    return currentId
}

export default addIdCapabilities