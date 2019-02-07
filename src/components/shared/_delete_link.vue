<template>
    <span class="delete-button" @click="deleteItem"><fa-icon name="trash-alt"></fa-icon></span>
</template>


<script>
import FaIcon from '@/components/shared/_fa_icon'

export default {
    name: 'DeleteLink',
    components: {FaIcon},
    props: ['item'],
    methods: {
        deleteItem: function () {
            this.item.remove()
        }
    }
}
</script>


<style scoped>

</style>
