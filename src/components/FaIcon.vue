<template>
    <span v-bind:class="[prefix, iconName]"></span>
</template>


<script>
export default {
    name: 'FaIcon',
    props: ['name'],
    data: function () {
        return {
            prefix: 'far',
        }
    },
    computed: {
        iconName: function () {
            return 'fa-' + this.name
        }
    }
}
</script>


<style scoped>

</style>
