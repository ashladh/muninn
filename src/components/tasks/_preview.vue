<template>
  <div class="preview task-preview" v-if="task.text !== ''">
        <item-actions :item="task" name="Task" :display-show-link="true"></item-actions>
        <div class="task-content" v-bind:class="{ completed: task.completed }" v-markdown-to-html>{{ task.text }}</div>
        <input type="checkbox" v-model="task.completed">Accomplie
    </div>
</template>

<script>
import ItemActions from '@/components/shared/_item_actions'
import Task from '@/models/task'

export default {
    name: 'TaskPreview',
    components: {ItemActions},
    props: ['task'],
    methods: {
        deleteTask: function (task) {
            Task.delete(task)
        }
    },
    watch: {
        'task.completed': function (completed) {
            Task.saveToLocalStorage()
        }
    }
}
</script>


<style>
.task-preview .task-content {
    overflow: hidden;
}

.completed {
    text-decoration: line-through;
    font-style: italic;
}
</style>
