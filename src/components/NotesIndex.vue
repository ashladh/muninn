<template>
  <div>

    <button @click="displayNoteForm" v-if="!displayNewNoteForm">Nouvelle note <i class="fas fa-plus"></i></button>

    <note-new  v-show="displayNewNoteForm" v-on:note-added="onNoteAdded"></note-new>

    <div id="note-display" v-if="displayMode"></div>

    <div id="notes-container">
      <note-preview v-for="note in notes" v-bind:note="note" :key="note.id"></note-preview>
    </div>

  </div>
</template>

<script>
import store from '../store'
import Note from '../models/note'
import NotePreview from '@/components/NotePreview'
import NoteNew from '@/components/NoteNew'
import NoteEdit from '@/components/NoteEdit'

export default {
    name: 'NotesIndex',
    components: {NotePreview, NoteNew, NoteEdit},
    data: function () {
        return {
            notes: store.notes,
            newNote: '',
            displayNewNoteForm: false,
            displayMode: false,
            displayedNote: false
        }
    },

    methods: {
        onNoteAdded: function () {
            this.displayNewNoteForm = false
        },

        displayNoteForm: function () {
            this.displayNewNoteForm = true
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
.indiv-note {
    background-color: white;
    border-radius: 10px;
    height: 100px;
    width: 60%;
    padding-left: 15px;
    margin: 10px;
    border-left: 5px solid #ff7657;
    border-right: 5px solid #ff7657;
    list-style-type: none;
    overflow: auto;
}

</style>
