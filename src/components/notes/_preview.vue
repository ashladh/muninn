<template>
  <div class="preview note-preview" v-if="note.text !== ''">
        <item-actions :item="note" name="Note" :display-show-link="true"></item-actions>
        <div class="note-content" v-markdown-to-html>{{ note.text }}</div>
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
.note-preview .note-content {
    overflow: hidden;
}
</style>
