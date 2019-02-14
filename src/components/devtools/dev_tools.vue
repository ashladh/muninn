<template>
    <div>
        <button @click="resetData">Réinitialiser les données de développement</button>
        <h1>Données actuelles</h1>
        <textarea v-model="currentData"></textarea>
    </div>
</template>

<script>
import store from '@/store'
import devData from '@/dev_data'
import Note from '@/models/note'
import Contact from '@/models/contact'
import Project from '@/models/project'

export default {
    name: 'DevTools',
    methods: {
        resetData: function () {
            store.contacts.length = 0
            devData.contacts.forEach(function (data) {
                var contact = new Contact(data)
                contact.saveToLocalStorage()
            })


            store.notes.length = 0
            devData.notes.forEach(function (data) {
                var note = new Note(data)
                note.saveToLocalStorage()
            })


            store.projects.length = 0
            devData.projects.forEach(function (data) {
                var project = new Project(data)
                project.saveToLocalStorage()
            })

        }
    },
    computed: {
        currentData: function () {
            return JSON.stringify(store, null, 4)
        }
    }
}
</script>


<style scoped>
textarea {
    width: 60%;
    height: 500px;
}
</style>