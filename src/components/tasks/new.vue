<template>
    <task-form :task="task" @submit="addTask"></task-form>
</template>

<script>
import router from '@/router'
import Task from '@/models/task'
import TaskForm from '@/components/tasks/_form'

export default {
    name: 'TaskNew',
    components: {TaskForm},
    data: function () {
        return {
            task: {text:''}
        }
    },
    methods: {
        addTask: function () {
            var newTask = new Task({text: this.task.text, completed: this.task.completed})
            newTask.saveToLocalStorage()
            this.task.text = ''
            router.push({name: 'TasksIndex'})
        }
    }
}
</script>

<style>
</style>