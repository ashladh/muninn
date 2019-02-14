<template>
  <div>
    <div class="index-actions">
        <router-link :to="{name: 'ProjectNew'}" class="button">
          <span class="button-text"> Nouveau projet </span>
          <i class="fas fa-plus"></i>
        </router-link>
    </div>

    <div id="projects-container">
      <project-preview v-for="project in projects" :project="project" :key="project.id"></project-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
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