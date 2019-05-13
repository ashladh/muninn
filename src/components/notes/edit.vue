<template>
    <note-form :note="note.forEdition()" @submit="saveNote"></note-form>
</template>

<script>

import Note from '@/models/note'
import router from '@/router'
import NoteForm from '@/components/notes/_form'

export default {
    name:'NoteEdit',
    components: {NoteForm},
    methods: {
        saveNote: function (params) {
            this.note.update(params)
            Note.saveToLocalStorage()
            router.push({name: 'NotesIndex'})
        }
    },
    computed: {
        note: function () {
            return Note.find(this.$route.params.id)
        }
    }
}
</script>

<style scoped>
</style>
