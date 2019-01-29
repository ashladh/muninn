<template>
  <div class="indiv-note" v-if="note.text !== ''">
        <span><router-link :to="{ name: 'NoteShow', params: { id: note.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span><router-link :to="{ name: 'NoteEdit', params: { id: note.id }}"><fa-icon name="edit"></fa-icon></router-link></span>
        <span @click="deleteNote(note)"><fa-icon name="trash-alt"></fa-icon></span>
        <div class="note-content" v-markdown-to-html>{{ note.text }}</div>
        <span class="update">créé le {{ note.createdAt | formatDate }}, mis à jour le  {{ note.updatedAt | formatDate }}</span>
    </div>
</template>

<script>
import FaIcon from '@/components/FaIcon'

export default {
    name: 'NotePreview',
    components: {FaIcon},
    props: ['note'],
    methods: {
        editNote: function (note) {
            console.log('edit', note)
        },
        deleteNote: function (note) {
            console.log('delete', note)
        },
        displayNote: function (note) {
            console.log('show', note)
        }
    }
}
</script>


<style scoped>
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
