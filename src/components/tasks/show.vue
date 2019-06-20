<template>
    <div>
        <item-actions :item="task" name="Task"></item-actions>
        <div v-if="task.project" class="task-project-associated">Projet : <router-link :to="{ name: 'ProjectShow', params: { id: task.project.id }}" class=" router-link-associated" > {{ task.project.title }}</router-link></div>

        <div v-if="task.contact" class="task-contact-associated">Contact : <router-link :to="{ name: 'ContactShow', params: { id: task.contact.id }}" class=" router-link-associated" >{{ task.contact.lastname }} {{ task.contact.firstname }}</router-link></div>
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
    width: 60%;
    margin: auto;
}

.checkbox-wrapper {
    width: 100%;
    margin: auto;
    margin-top: 10px;
}

.checkbox-wrapper label {
    left: calc(50% - 14px);
}

.task-project-associated, .task-contact-associated {
    text-align: center;
}
</style>