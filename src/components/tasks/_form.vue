<template>
    <div class="form">
        <h1>Nouvelle tâche</h1>
        <span class="input">
            <textarea v-model="task.text"></textarea>
            <div class="checkbox-wrapper">
                <input type="checkbox" v-model="task.completed" id="task-checkbox">
                <label for="task-checkbox" class="checkbox-label"></label>
            </div>
        </span>

        <div class="input">
            <span class="select-title">Projet :</span>
            <select v-model="task.projectId">
                <option value=""></option>
                <option v-for="project in projects" :project="project" :key="project.id" :value="project.id">{{ project.title }}</option>
            </select>

            <span class="select-title">Contact :</span>
            <select v-model="task.contactId">
                <option value=""></option>
                <option v-for="contact in contacts" :contact="contact" :key="contact.id" :value="contact.id">{{ contact.lastname }} {{ contact.firstname }}</option>
            </select>
        </div>

        <button @click="taskSubmit" class="button button-text">Enregistrer</button>
    </div>
</template>

<script>
import store from '@/store'
import utils from '@/utils'

export default {
    name: 'TaskForm',
    props: ['task'],
    data () {
        return {
            projects: store.projects,
            contacts: store.contacts
        }
    },
    methods: {
        taskSubmit: function () {
            const taskParams = utils.permit(this.task, ['text', 'completed', 'projectId', 'contactId'])

            this.$emit('submit', taskParams)
        }
    }
}
</script>

<style scoped>
.checkbox-wrapper {
    padding-bottom: 10px;
    width: 100%;
    margin: auto;
}

.checkbox-wrapper label {
    left: calc(50% - 14px);
}
</style>