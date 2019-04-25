<template>
  <div class="preview task-preview" v-if="task.text !== ''">
        <item-actions :item="task" name="Task" :display-show-link="true"></item-actions>
        <div class="task-content" v-bind:class="{ taskcompleted: task.completed }" v-markdown-to-html>{{ task.text }}</div>
        <div class="checkbox-wrapper">
            <input type="checkbox" v-model="task.completed" :id="'task'+task.id">
            <label :for="'task'+task.id" class="checkbox-label"></label>
        </div>
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
        'task.completed': function () {
            Task.saveToLocalStorage()
        }
    }
}
</script>


<style>
.task-preview .task-content {
    overflow: hidden;
}
</style>
