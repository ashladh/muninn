<template>
    <div class="actions">
        <delete-link :item="item"></delete-link>
        <span><router-link :to="{ name: name + 'Edit', params: { id: item.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <span v-if="displayShowLink"><router-link :to="{ name: name + 'Show', params: { id: item.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
    </div>
</template>


<script>
import FaIcon from '@/components/shared/_fa_icon'
import DeleteLink from '@/components/shared/_delete_link'

export default {
    name: 'ItemActions',
    components: {FaIcon, DeleteLink},
    props: ['item', 'name', 'displayShowLink']
}
</script>


<style>
.actions .far, .actions .fas {
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}

.actions {
    float: right;
}
</style>
