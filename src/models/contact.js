import Model from './model'


class Contact extends Model {
    constructor (params) {
        super(params)
        this.lastname = params.lastname
        this.firstname = params.firstname
        this.email = params.email
        this.phone = params.phone
        this.misc = params.misc
    }
}

Contact.storeKey = 'contacts'


export default Contact