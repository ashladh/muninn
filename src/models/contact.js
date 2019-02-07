import addModelCapabilities from './capabilities/model_capabilities'
import addLocalStorageCapabilities from './capabilities/local_storage_capabilities'
import addTimestampCapabilities from './capabilities/timestamp_capabilities'
import addIdCapabilities from './capabilities/id_capabilities'

function Contact (params) {
    this.lastname = params.lastname
    this.firstname = params.firstname
    this.email = params.email
    this.phone = params.phone
    this.misc = params.misc

    addIdCapabilities(this, params, 'contacts')
    addTimestampCapabilities(this, params)
}


addModelCapabilities(Contact, 'contacts')
addLocalStorageCapabilities(Contact, 'contacts')



export default Contact