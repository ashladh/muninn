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
import utils from '@/utils'


export default {
    name: 'ProjectForm',
    props: ['project'],
    methods: {
        projectSubmit: function () {
            const params = utils.permit(this.project, ['title', 'content'])
            this.$emit('submit', params)
        }
    }
}
</script>

<style>
</style>