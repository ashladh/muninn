<template>
    <div id="project-form">
        <input id="new-project-title" v-model="newProjectTitle" placeholder="Titre">
        <textarea id="new-project-content" v-model="newProjectContent" placeholder="Description"></textarea>
        <button @click="addProject">Enregistrer</button>
    </div>
</template>

<script>
import store from '@/store'
import Project from '@/models/project'

export default {
    name: 'ProjectNew',
    data: function () {
        return {
            projects: store.projects,
            newProjectTitle: '',
            newProjectContent: ''
        }
    },
    methods: {
        addProject: function () {
            var project = new Project({title: this.newProjectTitle, content: this.newProjectContent})
            this.projects.push(project)
            Project.saveToLocalStorage()
            this.newProjectContent = ''
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