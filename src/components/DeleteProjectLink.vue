<template>
    <span class="delete-button" @click="deleteProject"><fa-icon name="trash-alt"></fa-icon></span>
</template>


<script>
import FaIcon from '@/components/FaIcon'
import Project from '@/models/project'

export default {
    name: 'DeleteProjectLink',
    components: {FaIcon},
    props: ['project'],
    methods: {
        deleteProject: function () {
            Project.delete(this.project)
        }
    }
}
</script>


<style scoped>

</style>
