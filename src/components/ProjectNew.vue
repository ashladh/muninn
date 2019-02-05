<template>
    <project-form :project="project" @submit="addProject"></project-form>
</template>

<script>
import store from '@/store'
import Project from '@/models/project'
import ProjectForm from '@/components/ProjectForm'

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
            var project = new Project({title: this.project.itle, content: this.project.content})
            this.projects.push(project)
            Project.saveToLocalStorage()
            this.project.title = ''
            this.project.content = ''
            this.$emit('project-added')
        }
    }
}
</script>

<style scoped>
#new-project-title {
    border-radius: 10px;
    height: 50px;
    border: 3px solid #ff7657;
}

#new-project-content {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>