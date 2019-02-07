<template>
  <div class="indiv-note" v-if="note.text !== ''">
        <span><router-link :to="{ name: 'NoteShow', params: { id: note.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span><router-link :to="{ name: 'NoteEdit', params: { id: note.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <delete-link :item="note"></delete-link>
        <div class="note-content" v-markdown-to-html>{{ note.text }}</div>
        <human-timestamps :item="note"></human-timestamps>
    </div>
</template>

<script>
import FaIcon from '@/components/shared/_fa_icon'
import DeleteLink from '@/components/shared/_delete_link'
import HumanTimestamps from '@/components/shared/_human_timestamps'
import Note from '@/models/note'

export default {
    name: 'NotePreview',
    components: {FaIcon, DeleteLink, HumanTimestamps},
    props: ['note'],
    methods: {
        deleteNote: function (note) {
            Note.delete(note)
        }
    }
}
</script>


<style>
.indiv-note .update {
    font-style: italic;
    font-size: 0.6em;
    float: right;
    padding-right: 5px;
}

.indiv-note .note-content {
    height: 80px;
    overflow: hidden;
}

.indiv-note .far {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}

.indiv-note .fas {
    float: right;
    padding-right: 5px;
    font-size: 2em;
    color: #ffba5a;
}
</style>
