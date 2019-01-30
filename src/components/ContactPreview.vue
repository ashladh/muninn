<template>
  <div class="indiv-contact">
        <span><router-link :to="{ name: 'ContactShow', params: { id: contact.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span><router-link :to="{ name: 'ContactEdit', params: { id: contact.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <span class="delete-button" @click="deleteContact(contact)"><fa-icon name="trash-alt"></fa-icon></span>
        <div class="contact-content">
            <div class="contact-lastname">{{ contact.lastname }}</div>
            <div class="contact-firstname">{{ contact.firstname}}</div>
            <div class="contact-email">{{ contact.email }}</div>
        </div>
        <span class="update">créé le {{ contact.createdAt | formatDate }}, mis à jour le  {{ contact.updatedAt | formatDate }}</span>
    </div>
</template>

<script>
import FaIcon from '@/components/FaIcon'
import Contact from '../models/contact'

export default {
    name: 'ContactPreview',
    components: {FaIcon},
    props: ['contact'],
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
        }
    }
}
</script>


<style scoped>


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
