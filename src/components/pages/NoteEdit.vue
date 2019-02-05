<template>
    <note-form :note="note" @submit="saveNote"></note-form>
</template>

<script>

import Note from '@/models/note'
import router from '@/router'
import NoteForm from '@/components/NoteForm'

export default {
    name:'NoteEdit',
    components: {NoteForm},
    methods: {
        saveNote: function () {
            this.note.update()
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
.note-edit textarea {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 3px solid #ff7657;
    outline-style: none;
}
</style>
