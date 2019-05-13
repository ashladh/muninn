<template>
	<contact-form :contact="contact.forEdition()" @submit="saveContact"></contact-form>
</template>

<script>
import Contact from '@/models/contact'
import router from '@/router'
import ContactForm from '@/components/contacts/_form'

export default {
	name:'ContactEdit',
	components: {ContactForm},
    methods: {
        saveContact: function (params) {
            this.contact.update(params)
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