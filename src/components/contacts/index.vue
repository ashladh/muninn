<template>
  <div class="container">
    <div class="index-actions">
      <router-link :to="{name: 'ContactNew'}" class="button">
        <span class="button-text"> Nouveau contact </span>
        <i class="fas fa-plus"></i>
      </router-link>
    </div>

    <div id="contacts-container">
      <contact-preview v-for="contact in contacts" v-bind:contact="contact" :key="contact.id"></contact-preview>
    </div>
  </div>
</template>


<script>
import store from '@/store'
import ContactPreview from '@/components/contacts/_preview'

export default {
    name: 'ContactsIndex',
    data: function () {
      return {
        contacts: store.contacts
      }
    },
    components: {ContactPreview}
}
</script>

<style>
.container {
  margin: 0;
  padding: 0;
}
</style>

