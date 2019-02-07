<template>
    <div>
        <item-actions :item="project" name="Project"></item-actions>
        <div class="project-display" v-markdown-to-html>
            <div class="project-display-title">
                {{project.title}}
            </div>
            <div class="project-display-content">
                {{ project.content }}
            </div>
        </div>
    </div>
</template>


<script>
import Project from '@/models/project'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'
import ProjectPreview from '@/components/projects/_preview'

export default {
    components: {ItemActions, ProjectPreview},
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


<style scoped>
.project-display {
    border-radius: 10px;
    border: 5px solid #ff7657;
    background-color: white;
    height: auto;
    width: 60%;
    padding: 10px;
    margin: auto;
}
.far {
    font-size: 2em;
    color:#ff7657;
}

.showmode-icons {
    margin: auto;
    width: 95%;
    text-align: center;
    padding-bottom: 30px;
    padding-top: 15px;
    display: inline-block;
}

</style>
