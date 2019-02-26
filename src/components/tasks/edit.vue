<template>
    <task-form :task="task" @submit="saveTask"></task-form>
</template>

<script>

import Task from '@/models/task'
import router from '@/router'
import TaskForm from '@/components/tasks/_form'

export default {
    name:'TaskEdit',
    components: {TaskForm},
    methods: {
        saveTask: function () {
            this.task.update()
            Task.saveToLocalStorage()
            router.push({name: 'TasksIndex'})
        }
    },
    computed: {
        task: function () {
            return Task.find(this.$route.params.id)
        }
    }
}
</script>

<style>
</style>