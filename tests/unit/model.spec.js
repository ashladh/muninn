import Model from '@/models/model'
import store from '@/store'
import {expect} from 'chai'
import utils from '@/utils'


class Person extends Model {
    constructor (params) {
        super(params)
        this.lastname = params.lastname
        this.firstname = params.firstname
    }
}

Person.storeKey = 'people'


var testData = [
    {
        id: 2,
        firstname: 'person1',
        lastname: 'person1'
    },
    {
        id: 3,
        firstname: 'person2',
        lastname: 'person2'
    }
]

function setTestData() {
    utils.storage.setItem('people', JSON.stringify(testData))
}

describe('Model', function () {

    var person
    beforeEach(function () {
        person = new Person({
            lastname: 'Snow',
            firstname: 'Jon'
        })
        store.people = [person]
        utils.storage.setItem('people', JSON.stringify([]))
    })

    it('should create a model', function () {
        expect(person.lastname).to.equal('Snow')
        expect(person.firstname).to.equal('Jon')
        expect(person).to.have.property('id')
    })

    it('should have a store key', function () {
        expect(person.storeKey).to.equal('people')
    })

    it('should remove a model', function () {
        expect(store.people).to.include(person)
        person.remove()
        expect(store.people).to.not.include(person)
    })

    it('should find a model', function () {
        var id = person.id
        var foundPerson = Person.find(id)
        expect(foundPerson).to.equal(person)
    })

    it('should import data from local storage', function () {
        setTestData()
        Person.importFromLocalStorage()
        var foundPerson = Person.find(2)
        expect(foundPerson.lastname).to.equal('person1')
    })

    it('should save to local storage', function () {
        var person2 = new Person({
            lastname: 'Baratheon',
            firstname: 'Stannis'
        })
        store.people.push(person2)

        Person.saveToLocalStorage()
        
        var data = JSON.parse(utils.storage.getItem('people'))

        expect(data.length).to.equal(2)
        expect(data[0].lastname).to.equal('Snow')
    })
})