<template>
  <div>

    <button @click="displayProjectForm" v-if="!displayNewProjectForm">Nouveau projet <i class="fas fa-plus"></i></button>

    <project-new  v-show="displayNewProjectForm" v-on:project-added="onProjectAdded"></project-new>

    <div id="project-display" v-if="displayMode"></div>

    <div id="projects-container">
      <project-preview v-for="project in projects" :project="project" :key="project.id"></project-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import Project from '@/models/project'
import ProjectPreview from '@/components/projects/_preview'
import ProjectNew from '@/components/projects/_new'


export default {
    name: 'ProjectsIndex',
    components: {ProjectPreview, ProjectNew},
    data: function () {
        return {
            projects: store.projects,
            newProject: '',
            displayNewProjectForm: false,
            displayMode: false,
            displayedProject: false
        }
    },

    methods: {
        onProjectAdded: function () {
            this.displayNewProjectForm = false
        },

        displayProjectForm: function () {
            this.displayNewProjectForm = true
        },

        deleteProject: function (project) {
           var index = this.projects.indexOf(project)
           this.projects.splice(index, 1)
           Project.saveToLocalStorage()
        },

        displayProject: function (project) {
            this.displayMode = true
            this.displayedProject = project
        }

    }
}
</script>


<style scoped>

</style>