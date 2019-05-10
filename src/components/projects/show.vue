<template>
    <div>
        <item-actions :item="project" name="Project"></item-actions>
        <div class="box">
            <div class="project-display-title">
                {{project.title}}
            </div>
            <div class="project-display-content" v-markdown-to-html>
                {{ project.content }}
            </div>
        </div>

        <div id="tasks-container">
            <task-preview v-for="task in project.tasks" v-bind:task="task" :key="task.id"></task-preview>
        </div>
    </div>
</template>


<script>
import Project from '@/models/project'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'
import TaskPreview from '@/components/tasks/_preview'

export default {
    components: {ItemActions, TaskPreview},
    name: 'ProjectShow',
    computed: {
        project: function () {
            return Project.find(this.$route.params.id)
        }
    },
    methods: {
        deleteProject: function (note) {
            Project.delete(note)
            router.push({name: 'ProjectsIndex'})
        }
    }
}
</script>


<style>
.project-display-title {
    font-size: 2em;
    color: #5e616a;
    text-align: center;
}
</style>
