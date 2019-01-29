<template>
    <div id="contact-form">

        <span class="input input--jiro">
            <input class="input__field input__field--jiro" type="text" v-model="contact.lastname" />
            <label class="input__label input__label--jiro" for="input-10">
            <span class="input__label-content input__label-content--jiro">Nom</span>
            </label>
        </span>

        <span class="input input--jiro">
            <input class="input__field input__field--jiro" type="text" v-model="contact.firstname" />
            <label class="input__label input__label--jiro" for="input-10">
            <span class="input__label-content input__label-content--jiro">Prénom</span>
            </label>
        </span>


        <span class="input input--jiro">
            <input class="input__field input__field--jiro" type="text" v-model="contact.email" />
            <label class="input__label input__label--jiro" for="input-10">
            <span class="input__label-content input__label-content--jiro">Email</span>
            </label>
        </span>

        <span class="input input--jiro">
            <input class="input__field input__field--jiro" type="text" v-model="contact.phone" />
            <label class="input__label input__label--jiro" for="input-10">
            <span class="input__label-content input__label-content--jiro">Téléphone</span>
            </label>
        </span>

        <span class="input input--jiro">
            <textarea class="input__field input__field--jiro" type="text" v-model="contact.misc"></textarea>
            <label class="input__label input__label--jiro" for="input-10">
            <span class="input__label-content input__label-content--jiro">Informations diverses</span>
            </label>
        </span>
        <button @click="saveContact">Enregistrer</button>
    
        <button @click="addContact">Enregistrer</button>
    </div>
</template>

<script>
import store from '../store'
import Contact from '../models/contact'

export default {
    name: 'ContactNew',
    data: function () {
        return {
            contacts: store.contacts,
            lastname: '',
            firstname: '',
            email: '',
            phone: '',
            misc: ''
        }
    },
    methods: {
        addContact: function () {
            var contact = new Contact({
                lastname: this.lastname,
                firstname: this.firstname,
                email: this.email,
                phone: this.phone,
                misc: this.misc
            })
            this.contacts.push(contact)
            Contact.saveToLocalStorage()
            this.$emit('contact-added')
        }
    }
}
</script>

<style scoped>
#new-contact {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>