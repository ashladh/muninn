let storage
if (typeof localStorage === 'undefined') {
    storage = {
        getItem (key) {
            return storage.items[key]
        },

        setItem (key, value) {
            storage.items[key] = value
        },

        items: {}
    }
} else {
    storage = localStorage
}



function permit (object, keys) {
    const result = {}

    keys.forEach(function (key) {
        result[key] = object[key]
    })

    return result
}


export default {
    storage,
    permit
}