<template>
    <note-form :note="note" @submit="addNote"></note-form>
</template>

<script>
import store from '@/store'
import Note from '@/models/note'
import NoteForm from '@/components/NoteForm'

export default {
    name: 'NoteNew',
    components: {NoteForm},
    data: function () {
        return {
            notes: store.notes,
            note: {text:''},
        }
    },
    methods: {
        addNote: function () {
            var newNote = new Note({text: this.note.text})
            this.notes.push(newNote)
            Note.saveToLocalStorage()
            this.note.text = ''
            this.$emit('note-added')
        }
    }
}
</script>

<style>
</style>