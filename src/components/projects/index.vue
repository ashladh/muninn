<template>
  <div>
    <span>
        <router-link :to="{name: 'ProjectNew'}"> Nouveau projet <i class="fas fa-plus"></i></router-link>
    </span>

    <div id="projects-container">
      <project-preview v-for="project in projects" :project="project" :key="project.id"></project-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import Project from '@/models/project'
import ProjectPreview from '@/components/projects/_preview'


export default {
    name: 'ProjectsIndex',
    components: {ProjectPreview},
    data: function () {
        return {
            projects: store.projects
        }
    }
}
</script>


<style>

</style>