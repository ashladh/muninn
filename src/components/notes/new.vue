<template>
    <note-form :note="note" @submit="addNote"></note-form>
</template>

<script>
import router from '@/router'
import Note from '@/models/note'
import NoteForm from '@/components/notes/_form'

export default {
    name: 'NoteNew',
    components: {NoteForm},
    data: function () {
        return {
            note: {text:''}
        }
    },
    methods: {
        addNote: function () {
            var newNote = new Note({text: this.note.text})
            newNote.saveToLocalStorage()
            this.note.text = ''
            router.push({name: 'NotesIndex'})
        }
    }
}
</script>

<style>
</style>