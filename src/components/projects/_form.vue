<template>
    <div id="project-form" class="form">
        <span class="input">
            <input type="text" v-model="project.title" />
            <span>Titre</span>
        </span>

        <span class="input">
            <textarea v-model="project.content"></textarea>
            <span>Description</span>
        </span>

        <button @click="projectSubmit">Enregistrer</button>
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