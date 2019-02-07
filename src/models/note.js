import addModelCapabilities from './capabilities/model_capabilities'
import addLocalStorageCapabilities from './capabilities/local_storage_capabilities'
import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'

function Note (params) {
    this.text = params.text

    addIdCapabilities(this, params, 'notes')
    addTimestampCapabilities(this, params)
}


addModelCapabilities(Note, 'notes')
addLocalStorageCapabilities(Note, 'notes')



export default Note