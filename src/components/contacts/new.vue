<template>
    <contact-form :contact="contact" @submit="addContact"></contact-form>
</template>

<script>
import router from '@/router'
import Contact from '@/models/contact'
import ContactForm from '@/components/contacts/_form'

export default {
    name: 'ContactNew',
    components: {ContactForm},
    data: function () {
        return {
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
            contact.saveToLocalStorage()
            router.push({name: 'ContactsIndex'})
        }
    }
}
</script>

<style>
</style>