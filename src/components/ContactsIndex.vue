<template>
<div>
    <button @click="displayContactForm" v-if="!displayNewContactForm">Nouveau contact <i class="fas fa-plus"></i></button>

    <contact-new  v-show="displayNewContactForm" v-on:contact-added="onContactAdded"></contact-new>

    <div id="contacts-container">
      <contact-preview v-for="contact in contacts" v-bind:contact="contact" :key="contact.id"></contact-preview>
    </div>

  </div>
</template>


<script>
import store from '../store'
import ContactNew from '@/components/ContactNew'
import ContactPreview from '@/components/ContactPreview'
import ContactEdit from '@/components/ContactEdit'

export default {
    name: 'ContactsIndex',
    data: function () {
      return {
        displayNewContactForm: false,
        contacts: store.contacts
      }
    },
    components: {ContactNew, ContactPreview, ContactEdit},
    methods: {
      onContactAdded: function () {
        this.displayNewContactForm = false
      },
      displayContactForm: function () {
        this.displayNewContactForm = true
      }
    }
}
</script>

<style scoped>
.indiv-contact {
    background-color: white;
    border-radius: 10px;
    height: 120px;
    width: 40%;
    padding-left: 15px;
    margin: 10px;
    border-left: 5px solid #ff7657;
    border-right: 5px solid #ff7657;
    list-style-type: none;
    overflow: auto;
}
</style>

