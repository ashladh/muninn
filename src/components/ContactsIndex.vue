<template>
<div>
    <button @click="displayContactForm" v-if="!displayNewContactForm">Nouveau contact <i class="fas fa-plus"></i></button>

    <contact-new  v-show="displayNewContactForm" v-on:contact-added="onContactAdded"></contact-new>

    <div id="contact-display" v-if="displayMode"></div>

    <div id="contacts-container">
      <contact-preview v-for="contact in contacts" v-bind:contact="contact" :key="contact.id"></contact-preview>
    </div>

  </div>
</template>


<script>
import store from '../store'
import ContactNew from '@/components/ContactNew'

export default {
    name: 'ContactsIndex',
    components: {ContactNew}
}
</script>

<style scoped>

</style>

