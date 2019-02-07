<template>
    <div id="project-form">
        <input class="form-project-title" v-model="project.title" placeholder="Titre">
        <textarea class="form-project-content" v-model="project.content" placeholder="Description"></textarea>
        <button @click="projectSubmit">Enregistrer</button>
    </div>
</template>

<script>
import store from '@/store'
import Project from '@/models/project'

export default {
    name: 'ProjectForm',
    props: ['project'],
    methods: {
        projectSubmit: function () {
            this.$emit('submit', this.project)
        }
    }
}
</script>

<style>
.form-project-title {
    border-radius: 10px;
    height: 50px;
    border: 3px solid #ff7657;
}

.form-project-content {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>