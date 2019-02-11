import Model from '@/models/model'
import store from '@/store'
import {expect} from 'chai'
store.people = []

class Person extends Model {
    constructor (params) {
        super(params)
        this.lastname = params.lastname
        this.firstname = params.firstname
    }
}

Person.storeKey = 'people'



describe('Model', function () {

    it('should create a model', function () {
        var person = new Person({
            lastname: 'Snow',
            firstname: 'Jon'
        })
        expect(person.lastname).to.equal('Snow')
        expect(person.firstname).to.equal('Jon')
        expect(person).to.have.property('id')
    })

})