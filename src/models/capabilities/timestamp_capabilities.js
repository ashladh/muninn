import {DateTime} from 'luxon'

function addTimestampCapabilities (model, params) {
    if ('updatedAt' in params) {
        model.updatedAt = params.updatedAt
    }
    else {
        model.updatedAt = DateTime.local().toISO()
    }
    if ('createdAt' in params) {
        model.createdAt = params.createdAt
    }
    else {
        model.createdAt = DateTime.local().toISO()
    }

    model.touch = function () {
        model.updatedAt = DateTime.local().toISO()
    }
}



export default addTimestampCapabilities