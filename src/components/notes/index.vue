<template>
  <div>
    <div class="index-actions">
        <router-link :to="{name: 'NoteNew'}" class="button">
          <span class="button-text"> Nouvelle note </span>
          <i class="fas fa-plus"></i>
        </router-link>
    </div>

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
