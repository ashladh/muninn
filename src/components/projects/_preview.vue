<template>
    <div class="project-preview" v-if="project.title !== ''">
        <item-actions :item="project" name="Project" :display-show-link="true"></item-actions>
        <div class="project-content" v-markdown-to-html>
            <div class="project-content-title">{{ project.title }}</div>
            <div class="project-content-text">{{ project.content }}</div>
        </div>
        <human-timestamps :item="project"></human-timestamps>
    </div>
</template>

<script>
import HumanTimestamps from '@/components/shared/_human_timestamps'
import ItemActions from '@/components/shared/_item_actions'
import Project from '@/models/project'

export default {
    name: 'ProjectPreview',
    components: {HumanTimestamps, ItemActions},
    props: ['project']

}
</script>


<style>
.project-preview {
    background-color: white;
    border-radius: 10px;
    height: 100px;
    width: 60%;
    padding-left: 15px;
    margin: 10px;
    border-left: 5px solid #ff7657;
    border-right: 5px solid #ff7657;
    overflow: auto;
}

.project-preview .project-content {
    height: 80px;
    overflow: hidden;
}

.project-content-title {
    font-size: 1.5em;
    color: #665c84;
}
</style>
