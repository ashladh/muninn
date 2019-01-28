<template>
    <div>
        <button @click="goToKoin">Koin</button>
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
export default {
    data: function() {
        return {
            notes: globalNotes,
            newNote: '',
            displayNewNoteForm: false,
            displayEditMode: false,
            editedNote: false,
            displayMode: false,
            displayedNote: false
        }
    },

    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
