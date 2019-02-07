<template>
  <div class="indiv-contact">
        <span><router-link :to="{ name: 'ContactShow', params: { id: contact.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span><router-link :to="{ name: 'ContactEdit', params: { id: contact.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <delete-link :item="contact"></delete-link>
        <div class="contact-content">
            <div class="contact-lastname">{{ contact.lastname }}</div>
            <div class="contact-firstname">{{ contact.firstname}}</div>
            <div class="contact-email">{{ contact.email }}</div>
        </div>
        <human-timestamps :item="contact"></human-timestamps>
    </div>
</template>

<script>
import FaIcon from '@/components/shared/_fa_icon'
import DeleteLink from '@/components/shared/_delete_link'
import HumanTimestamps from '@/components/shared/_human_timestamps'
import Contact from '@/models/contact'

export default {
    name: 'ContactPreview',
    components: {FaIcon, HumanTimestamps, DeleteLink},
    props: ['contact'],
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
        }
    }
}
</script>


<style>


.indiv-contact .update {
    font-style: italic;
    font-size: 0.6em;
    float: right;
    padding-right: 5px;
}

.indiv-contact .contact-content {
    overflow: hidden;
}

.indiv-contact .far {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}

.indiv-contact .fas {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}
</style>
