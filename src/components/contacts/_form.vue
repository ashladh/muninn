<template>
    <div class="form">
        <span class="input">
            <input type="text" v-model="contact.lastname" />
            <span>Nom</span>
        </span>

        <span class="input">
            <input type="text" v-model="contact.firstname" />
            <span>Prénom</span>
        </span>


        <span class="input">
            <input type="text" v-model="contact.email" />
            <span>Email</span>
        </span>

        <span class="input">
            <input type="text" v-model="contact.phone" />
            <span>Téléphone</span>
        </span>

        <span class="input">
            <textarea v-model="contact.misc"></textarea>
            <span>Informations diverses</span>
        </span>
        
        <button @click="contactSubmit">Enregistrer</button>
    </div>
</template>

<script>
export default {
    name:'ContactForm',
    props: ['contact'],
    methods: {
        contactSubmit: function () {
            this.$emit('submit', this.contact)
        }
    }
}
</script>

<style>
</style>