<template>
  <div>
    <span>
        <router-link :to="{name: 'NoteNew'}"> Nouvelle note <i class="fas fa-plus"></i></router-link>
    </span>

    <div id="notes-container">
      <note-preview v-for="note in notes" v-bind:note="note" :key="note.id"></note-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import Note from '@/models/note'
import NotePreview from '@/components/notes/_preview'


export default {
    name: 'NotesIndex',
    components: {NotePreview},
    data: function () {
        return {
            notes: store.notes
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
