import Model from '@/models/model'

var expect = require('chai').expect

describe('Model', function () {

    describe('instance', function () {
        it('should have timestamps', function () {
            var model = new Model({})
            var createdAt = new Date(model.createdAt).getTime()
            expect(createdAt).to.not.be.NaN
        })
    })

})