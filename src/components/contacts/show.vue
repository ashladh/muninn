<template>
    <div>
        <div class="box contact-show-box">
            <div class="contact-display-lastname">{{ contact.lastname }}</div>
            <div class="contact-display-firstname">{{ contact.firstname }}</div>
            <div class="contact-display-email">{{ contact.email }}</div>
            <div class="contact-display-phone">{{ contact.phone }}</div>
            <span class="contact-display-text">Informations diverses :</span><div class="contact-display-misc">{{ contact.misc }}</div>
        </div>
        <item-actions :item="contact" name="Contact" class="item-actions-show"></item-actions>
    </div>
</template>


<script>
import Contact from '@/models/contact'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'

export default {
    components: {ItemActions},
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


<style>
.contact-show-box {
    text-align: center;
}
.contact-display-lastname, .contact-display-firstname {
    font-weight: bold;
    font-size: 24px;
    color: #5e616a;
    display: inline-block;
    padding-left: 10px;
}

.contact-display-email, .contact-display-phone, .contact-display-misc {
    color: #b3b3cc;
    font-style: italic;
}

.contact-display-phone {
    font-style: normal;
}

.contact-display-misc {
    font-size: 14px;
}

.contact-display-text {
    font-size: 12px;
}


.item-actions-show {
    float: none;
    text-align: center;
}
</style>
