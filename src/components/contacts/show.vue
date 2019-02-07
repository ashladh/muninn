<template>
    <div>
        <item-actions :item="contact" name="Contact"></item-actions>
        <div class="contact-display">
            <div class="contact-display-lastname">{{ contact.lastname }}</div>
            <div class="contact-display-firstname">{{ contact.firstname }}</div>
            <div class="contact-display-email">{{ contact.email }}</div>
            <div class="contact-display-phone">{{ contact.phone }}</div>
            <div class="contact-display-misc">{{ contact.misc }}</div>
        </div>
    </div>
</template>


<script>
import Contact from '@/models/contact'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'

export default {
    components: {ItemActions},
    name: 'ContactShow',
    computed: {
        contact: function () {
            return Contact.find(this.$route.params.id)
        }
    },
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
            router.push({name: 'ContactsIndex'})
        }
    }
}
</script>


<style>
.contact-display {
    border-radius: 10px;
    border: 5px solid #ff7657;
    background-color: white;
    height: auto;
    width: 60%;
    padding: 10px;
    margin: auto;
}
</style>
