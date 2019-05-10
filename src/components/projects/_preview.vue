<template>
    <div class="project-preview" v-if="project.title !== ''">
        <item-actions :item="project" name="Project" :display-show-link="true"></item-actions>
        <div class="project-content">
            <div class="project-content-title">{{ project.title }}</div>
            <div class="project-content-text" v-markdown-to-html>{{ project.content }}</div>
        </div>
    </div>
</template>

<script>
import ItemActions from '@/components/shared/_item_actions'

export default {
    name: 'ProjectPreview',
    components: {ItemActions},
    props: ['project']

}
</script>


<style>
.project-preview {
    background-color: white;
    border-radius: 10px;
    padding-left: 15px;
    margin: 10px;
    box-shadow: 5px 5px 5px #e8e8e8;
    font-size: 0.8em;
}

.project-preview .project-content {
    height: 80px;
    overflow: hidden;
}

.project-content-title {
    font-size: 2em;
    color: #5e616a;
}

.project-content-text {
    font-size: 0.8em;
    padding: 15px;
    padding-top: 0;
}

.actions {
    padding: 0;
}
</style>
