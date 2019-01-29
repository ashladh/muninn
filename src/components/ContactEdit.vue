<template>
    <div id="contact-edit">
        <input placeholder="Nom" v-model="contact.lastname">
        <input placeholder="Prénom" v-model="contact.firstname">
        <input placeholder="Email" v-model="contact.email">
        <input placeholder="Téléphone" v-model="contact.phone">
        <textarea placeholder="Informations diverses" v-model="contact.misc"> </textarea>
        <button @click="saveContact">Enregistrer</button>
    </div>
</template>

<script>
import store from '../store'
import Contact from '../models/contact'
import router from '../router'

export default {
    name:'ContactEdit',
    methods: {
        saveContact: function () {
            this.contact.update()
            Contact.saveToLocalStorage()
            router.push({name: 'ContactIndex'})
        }
    },
    computed: {
        contact: function () {
            return Contact.find(this.$route.params.id)
        }
    }
}
</script>

<style scoped>

</style>