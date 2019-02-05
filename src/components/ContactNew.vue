<template>
    <contact-form :contact="contact" @submit="addContact"></contact-form>
</template>

<script>
import store from '@/store'
import Contact from '@/models/contact'
import ContactForm from '@/components/ContactForm'

export default {
    name: 'ContactNew',
    components: {ContactForm},
    data: function () {
        return {
            contacts: store.contacts,
            contact: {
                lastname: '',
                firstname: '',
                email: '',
                phone: '',
                misc: ''
            }
        }
    },
    methods: {
        addContact: function () {
            var contact = new Contact({
                lastname: this.contact.lastname,
                firstname: this.contact.firstname,
                email: this.contact.email,
                phone: this.contact.phone,
                misc: this.contact.misc
            })
            this.contacts.push(contact)
            Contact.saveToLocalStorage()
            this.$emit('contact-added')
        }
    }
}
</script>

<style>

</style>