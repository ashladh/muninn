<template>
    <div class="form">
        <h1>Nouveau contact</h1>
        <span class="input">
            <span>Nom</span>
            <input type="text" v-model="contact.lastname" />
        </span>

        <span class="input">
            <span>Prénom</span>
            <input type="text" v-model="contact.firstname" />
        </span>


        <span class="input">
            <span>Email</span>
            <input type="text" v-model="contact.email" />
        </span>

        <span class="input">
            <span>Téléphone</span>
            <input type="text" v-model="contact.phone" />
        </span>

        <span class="input">
            <span>Informations diverses</span>
            <textarea v-model="contact.misc"></textarea>
        </span>

        <button @click="contactSubmit" class="button button-text">Enregistrer</button>
    </div>
</template>

<script>
import utils from '@/utils'

export default {
    name:'ContactForm',
    props: ['contact'],
    methods: {
        contactSubmit: function () {
            const params = utils.permit(this.contact, ['lastname', 'firstname', 'email', 'phone', 'misc'])
            this.$emit('submit', params)
        }
    }
}
</script>

<style>
</style>