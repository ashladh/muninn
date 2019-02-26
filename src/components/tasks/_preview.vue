<template>
  <div class="preview task-preview" v-if="task.text !== ''">
        <item-actions :item="task" name="Task" :display-show-link="true"></item-actions>
        <div class="task-content" v-bind:class="{ taskcompleted: task.completed }" v-markdown-to-html>{{ task.text }}</div>
        <div class="checkbox-wrapper">
            <input type="checkbox" v-model="task.completed" id="task-checkbox">
            <label for="task-checkbox" class="checkbox-label">Accomplie</label>
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
</style>
