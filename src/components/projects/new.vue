<template>
    <project-form :project="project" @submit="addProject"></project-form>
</template>

<script>
import store from '@/store'
import router from '@/router'
import Project from '@/models/project'
import ProjectForm from '@/components/projects/_form'

export default {
    name: 'ProjectNew',
    components: {ProjectForm},
    data: function () {
        return {
            projects: store.projects,
            project: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        addProject: function () {
            var project = new Project({title: this.project.title, content: this.project.content})
            this.projects.push(project)
            Project.saveToLocalStorage()
            this.project.title = ''
            this.project.content = ''
            router.push({name: 'ProjectsIndex'})
        }
    }
}
</script>

<style>
</style>