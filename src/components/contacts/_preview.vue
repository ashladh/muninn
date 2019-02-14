<template>
  <div class="preview contact-preview">
        <item-actions :item="contact" name="Contact" :display-show-link="true"></item-actions>
        <div class="contact-content">
            <div class="contact-lastname">{{ contact.lastname }}</div>
            <div class="contact-firstname">{{ contact.firstname}}</div>
            <div class="contact-email">{{ contact.email }}</div>
        </div>
        <human-timestamps :item="contact"></human-timestamps>
    </div>
</template>

<script>
import ItemActions from '@/components/shared/_item_actions'
import HumanTimestamps from '@/components/shared/_human_timestamps'
import Contact from '@/models/contact'

export default {
    name: 'ContactPreview',
    components: {ItemActions, HumanTimestamps},
    props: ['contact'],
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
        }
    }
}
</script>


<style>
.contact-preview .contact-content {
    overflow: hidden;
}

.contact-preview {
  width: 40%;
}
</style>
