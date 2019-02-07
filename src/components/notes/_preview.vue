<template>
  <div class="indiv-note" v-if="note.text !== ''">
        <item-actions :item="note" name="Note" :display-show-link="true"></item-actions>
        <div class="note-content" v-markdown-to-html>{{ note.text }}</div>
        <human-timestamps :item="note"></human-timestamps>
    </div>
</template>

<script>
import ItemActions from '@/components/shared/_item_actions'
import HumanTimestamps from '@/components/shared/_human_timestamps'
import Note from '@/models/note'

export default {
    name: 'NotePreview',
    components: {ItemActions, HumanTimestamps},
    props: ['note'],
    methods: {
        deleteNote: function (note) {
            Note.delete(note)
        }
    }
}
</script>


<style>
.indiv-note .note-content {
    height: 80px;
    overflow: hidden;
}
</style>
