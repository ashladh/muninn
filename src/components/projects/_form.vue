<template>
    <div id="project-form" class="form">
        <h1>Nouveau projet</h1>
        <span class="input">
            <span>Titre</span>
            <input type="text" v-model="project.title" />
        </span>

        <span class="input">
            <span>Description</span>
            <textarea v-model="project.content"></textarea>
        </span>

        <button @click="projectSubmit" class="button button-text">Enregistrer</button>
    </div>
</template>

<script>
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
</style>