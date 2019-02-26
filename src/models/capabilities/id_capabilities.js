import utils from '../../utils'
import store from '@/store'


var ids = utils.storage.getItem('currentIds')
if (ids) {
    var parsedIds = JSON.parse(ids)
    store.currentIds = parsedIds
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
    var currentId = store.currentIds[key]
    currentId++
    store.currentIds[key] = currentId

    utils.storage.setItem('currentIds', JSON.stringify(store.currentIds))
    return currentId
}


export default addIdCapabilities