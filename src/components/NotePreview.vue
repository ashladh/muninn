<template>
  <div class="indiv-note" v-if="note.text !== ''">
        <span><router-link :to="{ name: 'note', params: { id: note.id }}"><fa-icon name="eye"></fa-icon></router-link></span>
        <span @click="editNote(note)"><fa-icon name="edit"></fa-icon></span>
        <span @click="deleteNote(note)"><fa-icon name="trash-alt"></fa-icon></span>
        <div class="note-content" v-markdown-to-html>{{ note.text }}</div>
        <span class="update">mis à jour le  {{ note.updatedAt | formatDate }}</span>
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

</style>
