<template>
<div>
    <button @click="displayContactForm" v-if="!displayNewContactForm">Nouveau contact <i class="fas fa-plus"></i></button>

    <contact-new  v-show="displayNewContactForm" v-on:contact-added="onContactAdded"></contact-new>

    <div id="contacts-container">
      <!--<contact-preview v-for="contact in contacts" v-bind:contact="contact" :key="contact.id"></contact-preview>-->
    </div>

  </div>
</template>


<script>
import store from '../store'
import ContactNew from '@/components/ContactNew'

export default {
    name: 'ContactsIndex',
    data: function () {
      return {
        displayNewContactForm: false,
        contacts: store.contacts
      }
    },
    components: {ContactNew},
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

</style>

