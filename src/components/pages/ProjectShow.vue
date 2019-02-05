<template>
    <div>
        <div class="showmode-icons">
            <router-link :to="{ name: 'ProjectEdit', params: { id: project.id }}"><fa-icon name="edit"></fa-icon></router-link>
            <span class="delete-button" @click="deleteProject(project)"><fa-icon name="trash-alt"></fa-icon></span>
        </div>
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
import FaIcon from '@/components/FaIcon'
import ProjectPreview from '@/components/ProjectPreview'

export default {
    components: {FaIcon, ProjectPreview},
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
