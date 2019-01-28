<template>
  <div>

    <button @click="displayNoteForm" v-if="!displayNewNoteForm" >Nouvelle note <i class="fas fa-plus"></i></button>
    <div id="note-form" v-show="displayNewNoteForm">
      <textarea id="new-note" v-model="newNote"> </textarea>
      <button @click="addNote">Enregistrer</button>
    </div>

    <div id="note-display" v-if="displayMode"></div>

    <div id="note-edit" v-if="displayEditMode">
      <textarea v-model="editedNote.text"></textarea>
      <button @click="saveNote">Enregistrer</button>
    </div>

    <div id="notes-container">
      <note-preview v-for="note in notes" v-bind:note="note" :key="note.id"></note-preview>
    </div>

  </div>
</template>

<script>
import store from '../store'
import Note from '../models/note'
import NotePreview from '@/components/NotePreview'

export default {
    name: 'NotesIndex',
    components: {NotePreview},
    data: function () {
        return {
            notes: store.notes,
            newNote: '',
            displayNewNoteForm: false,
            displayEditMode: false,
            editedNote: false,
            displayMode: false,
            displayedNote: false
        }
    },
    methods: {
        addNote: function () {
            var note = new Note({text: this.newNote})

            this.notes.push(note)
            Note.saveToLocalStorage()
            this.newNote = ''
            this.displayNewNoteForm = false
        },

        displayNoteForm: function () {
            this.displayNewNoteForm = true
        },

        saveNote: function () {
            this.editedNote.update()
            this.displayEditMode = false
            this.editedNote = false
            Note.saveToLocalStorage()
        },

        editNote: function (note) {
            this.displayEditMode = true
            this.editedNote = note
        },

        deleteNote: function (note) {
           var index = this.notes.indexOf(note)
           this.notes.splice(index, 1)
           Note.saveToLocalStorage()
        },

        displayNote: function (note) {
            this.displayMode = true
            this.displayedNote = note
        }

    }
}
</script>


<style scoped>

</style>
