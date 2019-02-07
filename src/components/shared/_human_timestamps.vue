<template>
    <span class="timestamps">créé le {{ item.createdAt | formatDate }}, mis à jour le  {{ item.updatedAt | formatDate }}</span>
</template>


<script>
export default {
    name: 'HumanTimestamps',
    props: ['item']
}
</script>


<style>
.timestamps {
    font-style: italic;
    font-size: 0.6em;
    float: right;
    padding-right: 5px;
}
</style>
