<template>
    <project-form :project="project" @submit="saveProject"></project-form>
</template>

<script>

import Project from '@/models/project'
import router from '@/router'
import ProjectForm from '@/components/projects/_form'

export default {
    name:'ProjectEdit',
    components: {ProjectForm},
    methods: {
        saveProject: function () {
            this.project.update()
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

<style scoped>
.project-edit input {
    border-radius: 10px;
    height: 50px;
    border: 3px solid #ff7657;
}

.project-edit textarea {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 3px solid #ff7657;
    outline-style: none;
}
</style>
