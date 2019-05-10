<template>
  <div class="homepage-wrapper">
    <h1><router-link class="home-link" to="/notes" exact>Notes</router-link></h1>
    <div id="notes-container">
      <note-preview v-for="note in notes" v-bind:note="note" :key="note.id"></note-preview>
    </div>

    <h1>Contacts</h1>
    <div id="contacts-container">
        <contact-preview v-for="contact in contacts" v-bind:contact="contact" :key="contact.id"></contact-preview>
    </div>

    <h1>Projets</h1>
    <div id="projects-container">
      <project-preview v-for="project in projects" :project="project" :key="project.id"></project-preview>
    </div>

    <h1>Tâches</h1>
    <div id="tasks-container">
        <task-preview v-for="task in tasks" v-bind:task="task" :key="task.id"></task-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import NotePreview from '@/components/notes/_preview'
import ContactPreview from '@/components/contacts/_preview'
import ProjectPreview from '@/components/projects/_preview'
import TaskPreview from '@/components/tasks/_preview'



export default {
    name: 'HomePage',
    components: {NotePreview, ContactPreview, ProjectPreview, TaskPreview},
    data: function () {
        return {
            notes: store.notes,
            contacts: store.contacts,
            projects: store.projects,
            tasks: store.tasks
        }
    }
}
</script>


<style>
.home-link {
  text-decoration: none;
  color: #5e616a;
}
</style>