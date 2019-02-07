
import addLocalStorageCapabilities from './capabilities/local_storage_capabilities'
import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addModelCapabilities from './capabilities/model_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'

function Project (params) {
    this.title = params.title
    this.content = params.content

    addIdCapabilities(this, params, 'projects')
    addTimestampCapabilities(this, params)

}




addModelCapabilities(Project, 'projects')
addLocalStorageCapabilities(Project, 'projects')






export default Project