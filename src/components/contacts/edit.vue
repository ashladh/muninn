<template>
	<contact-form :contact="contact" @submit="saveContact"></contact-form>
</template>

<script>
import Contact from '@/models/contact'
import router from '@/router'
import ContactForm from '@/components/contacts/_form'

export default {
	name:'ContactEdit',
	components: {ContactForm},
    methods: {
        saveContact: function () {
            this.contact.update()
            Contact.saveToLocalStorage()
            router.push({name: 'ContactsIndex'})
        }
    },
    computed: {
        contact: function () {
            return Contact.find(this.$route.params.id)
        }
    }
}
</script>

<style>
</style>