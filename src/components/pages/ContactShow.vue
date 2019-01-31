<template>
    <div>
        <div class="showmode-icons">
            <router-link :to="{ name: 'ContactEdit', params: { id: contact.id }}"><fa-icon name="edit"></fa-icon></router-link>
            <span class="delete-button" @click="deleteContact(contact)"><fa-icon name="trash-alt"></fa-icon></span>
        </div>
        <div id="contact-display" class="displayed-contact-content" >
            <div class="contact-display-lastname">{{ contact.lastname }}</div>
            <div class="contact-display-firstname">{{ contact.firstname }}</div>
            <div class="contact-display-email">{{ contact.email }}</div>
            <div class="contact-display-phone">{{ contact.phone }}</div>
            <div class="contact-display-misc">{{ contact.misc }}</div>
        </div>
    </div>
</template>


<script>
import Contact from '@/models/contact'
import router from '@/router'
import FaIcon from '@/components/FaIcon'
import ContactPreview from '@/components/ContactPreview'

export default {
    components: {FaIcon, ContactPreview},
    name: 'ContactShow',
    computed: {
        contact: function () {
            return Contact.find(this.$route.params.id)
        }
    },
    methods: {
        deleteContact: function (contact) {
            Contact.delete(contact)
            router.push({name: 'ContactsIndex'})
        }
    }
}
</script>


<style scoped>
#note-display {
    border-radius: 10px;
    border: 5px solid #ff7657;
    background-color: white;
    height: auto;
    width: 60%;
    padding: 10px;
    margin: auto;
}
.far {
    font-size: 2em;
    color:#ff7657;
}

.showmode-icons {
    margin: auto;
    width: 95%;
    text-align: center;
    padding-bottom: 30px;
    padding-top: 15px;
    display: inline-block;
}

</style>
