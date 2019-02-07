<template>
  <div class="indiv-project" v-if="project.title !== ''">
        <span><router-link :to="{ name: 'ProjectShow', params: { id: project.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span><router-link :to="{ name: 'ProjectEdit', params: { id: project.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <delete-link :item="project"></delete-link>
        <div class="project-content" v-markdown-to-html>
            <div class="project-content-title">{{ project.title }}</div>
            <div class="project-content-text">{{ project.content }}</div>
        </div>
        <span class="update">créé le {{ project.createdAt | formatDate }}, mis à jour le  {{ project.updatedAt | formatDate }}</span>
    </div>
</template>

<script>
import FaIcon from '@/components/shared/_fa_icon'
import DeleteLink from '@/components/shared/_delete_link'
import Project from '@/models/project'

export default {
    name: 'ProjectPreview',
    components: {FaIcon, DeleteLink},
    props: ['project']

}
</script>


<style>
.indiv-project .update {
    font-style: italic;
    font-size: 0.6em;
    float: right;
    padding-right: 5px;
}

.indiv-project .project-content {
    height: 80px;
    overflow: hidden;
}

.indiv-project .far {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}

.indiv-project .fas {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}

.project-content-title {
    font-size: 1.5em;
    color: #665c84;
}
</style>
