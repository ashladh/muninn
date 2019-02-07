<template>
  <div class="indiv-contact">
        <item-actions :item="contact" name="Contact"></item-actions>
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
.indiv-contact .contact-content {
    overflow: hidden;
}
</style>
