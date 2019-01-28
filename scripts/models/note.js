/* eslint-disable */
function Note (params) {
    this.text = params.text
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    if ('updatedAt' in params) {
        this.updatedAt = params.updatedAt
    }
    else {
        this.updatedAt = moment()
    }
}

Note.prototype.update = function () {
    this.updatedAt = moment()
}