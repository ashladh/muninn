<template>
<div>
    <span>
      <router-link :to="{name: 'ContactNew'}"> Nouveau contact <i class="fas fa-plus"></i></router-link>
    </span>

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
</style>

