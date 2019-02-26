<template>
    <div class="form">
        <h1>Nouvelle tâche</h1>
        <span class="input">
            <textarea v-model="task.text"></textarea>
            <input type="checkbox" v-model="task.completed">Accomplie
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