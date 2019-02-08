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

export default {storage}