<template>
    <div class="form">
        <h1>Nouvelle tâche</h1>
        <span class="input">
            <textarea v-model="task.text"></textarea>
            <div class="checkbox-wrapper">
                <input type="checkbox" v-model="task.completed" id="task-checkbox">
                <label for="task-checkbox" class="checkbox-label">Accomplie</label>
            </div>
        </span>
        <button @click="taskSubmit" class="button button-text">Enregistrer</button>
    </div>
</template>

<script>
export default {
    name: 'TaskForm',
    props: ['task'],
    methods: {
        taskSubmit: function () {
            this.$emit('submit', this.task)
        }
    }
}
</script>

<style>
</style>