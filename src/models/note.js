import addModelCapabilities from './model_capabilities'
import addLocalStorageCapabilities from './local_storage_capabilities'
import addTimestampCapabilities from './timestamp_capabilities'
import addIdCapabilities from './id_capabilities'

function Note (params) {
    this.text = params.text

    addIdCapabilities(this, params, 'notes')
    addTimestampCapabilities(this, params)
}


addModelCapabilities(Note, 'notes')
addLocalStorageCapabilities(Note, 'notes')



export default Note