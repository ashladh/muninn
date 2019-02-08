<template>
  <div class="note-preview" v-if="note.text !== ''">
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
.note-preview .note-content {
    height: 80px;
    overflow: hidden;
}

.note-preview {
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
</style>
