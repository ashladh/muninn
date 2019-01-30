<template>
    <div id="project-edit">
        <input v-model="project.title">
        <textarea v-model="project.content"></textarea>
        <button @click="saveProject">Enregistrer</button>
    </div>
</template>

<script>

import Project from '../models/project'
import router from '../router'

export default {
    name:'ProjectEdit',
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
#project-edit input {
    border-radius: 10px;
    height: 50px;
    border: 3px solid #ff7657;
}

#project-edit textarea {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 3px solid #ff7657;
    outline-style: none;
}
</style>
