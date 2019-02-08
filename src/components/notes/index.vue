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


<style>
</style>
