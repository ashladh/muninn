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
import ContactNew from '@/components/contacts/new'
import ContactPreview from '@/components/contacts/_preview'

export default {
    name: 'ContactsIndex',
    data: function () {
      return {
        contacts: store.contacts
      }
    },
    components: {ContactNew, ContactPreview}
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

