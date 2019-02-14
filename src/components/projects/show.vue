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
    </div>
</template>


<script>
import Project from '@/models/project'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'

export default {
    components: {ItemActions},
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
</style>
