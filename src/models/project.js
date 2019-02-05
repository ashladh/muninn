
import addLocalStorageCapabilities from './local_storage_capabilities'
import addTimestampCapabilities from './timestamp_capabilities'
import addModelCapabilities from './model_capabilities'
import addIdCapabilities from './id_capabilities'

function Project (params) {
    this.title = params.title
    this.content = params.content

    addIdCapabilities(this, params, 'projects')
    addTimestampCapabilities(this, params)

}




addModelCapabilities(Project, 'projects')
addLocalStorageCapabilities(Project, 'projects')






export default Project