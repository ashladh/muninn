<template>
    <div id="contact-form">
        <input placeholder="Nom" v-model="lastname">
        <input placeholder="Prénom" v-model="firstname">
        <input placeholder="Email" v-model="email">
        <input placeholder="Téléphone" v-model="phone">
        <textarea placeholder="Informations diverses" v-model="misc"> </textarea>
        <button @click="addContact">Enregistrer</button>
    </div>
</template>

<script>
import store from '../store'
import Contact from '../models/contact'

export default {
    name: 'ContactNew',
    data: function () {
        return {
            contacts: store.contacts,
            lastname: '',
            firstname: '',
            email: '',
            phone: '',
            misc: ''
        }
    },
    methods: {
        addContact: function () {
            var contact = new Contact({
                lastname: this.lastname,
                firstname: this.firstname,
                email: this.email,
                phone: this.phone,
                misc: this.misc
            })
            this.contacts.push(contact)
            Contact.saveToLocalStorage()
            this.$emit('contact-added')
        }
    }
}
</script>

<style scoped>
#new-contact {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>