<template>
    <div>
        <item-actions :item="task" name="Task"></item-actions>
        <div class="box" v-markdown-to-html v-bind:class="{ taskcompleted: task.completed }">{{ task.text }}</div>
        <div class="checkbox-wrapper">
            <input type="checkbox" v-model="task.completed" id="task-checkbox">
            <label for="task-checkbox" class="checkbox-label"></label>
        </div>
    </div>
</template>


<script>
import Task from '@/models/task'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'

export default {
    components: {ItemActions},
    name: 'TaskShow',
    computed: {
        task: function () {
            return Task.find(this.$route.params.id)
        }
    },
    methods: {
        deleteTask: function (task) {
            Task.delete(task)
            router.push({name: 'TasksIndex'})
        }
    }
}
</script>


<style scoped>
.box {
    margin-bottom: 10px;
}

.checkbox-wrapper {
    width: 100%;
    margin: auto;
}

.checkbox-wrapper label {
    left: calc(50% - 14px);
}
</style>