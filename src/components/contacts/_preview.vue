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
.contact-preview .contact-content {
    overflow: hidden;
}

.contact-preview {
    display: inline-block;
    width: calc(33% - 20px);
}

.contact-lastname, .contact-firstname {
    display: inline-block;
    font-weight: bold;
    color: #5e616a;
    padding-right: 5px;
    padding-top: 30px;
}

.contact-email {
    color: rgba(94, 97, 106, .7);
}
</style>
