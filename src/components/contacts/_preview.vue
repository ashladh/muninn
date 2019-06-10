<template>
  <div class="preview contact-preview">
        <item-actions :item="contact" name="Contact" :display-show-link="true"></item-actions>
        <div class="contact-content">
            <div class="contact-lastname">{{ contact.lastname }}</div>
            <div class="contact-firstname">{{ contact.firstname}}</div>
            <div class="contact-email">{{ contact.email }}</div>
        </div>
    </div>
</template>

<script>
import ItemActions from '@/components/shared/_item_actions'
import Contact from '@/models/contact'

export default {
    name: 'ContactPreview',
    components: {ItemActions},
    props: ['contact'],
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
        }
    }
}
</script>


<style>

</style>
