<template>
    <div>
        <item-actions :item="task" name="Task"></item-actions>
        <div class="box" v-markdown-to-html>{{ task.text }}</div>
        <div v-if="task.completed">Accomplie</div>
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
</style>