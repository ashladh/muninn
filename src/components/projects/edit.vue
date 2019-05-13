<template>
    <project-form :project="project.forEdition()" @submit="saveProject"></project-form>
</template>

<script>

import Project from '@/models/project'
import router from '@/router'
import ProjectForm from '@/components/projects/_form'

export default {
    name:'ProjectEdit',
    components: {ProjectForm},
    methods: {
        saveProject: function (params) {
            this.project.update(params)
            Project.saveToLocalStorage()
            router.push({name: 'ProjectsIndex'})
        }
    },
    computed: {
        project: function () {
            return Project.find(this.$route.params.id)
        }
    }
}
</script>

<style>
</style>
