<template>
    <div class="note-edit">
      <textarea v-model="note.text"></textarea>
      <button @click="saveNote">Enregistrer</button>
    </div>
</template>

<script>

import Note from '@/models/note'
import router from '@/router'

export default {
    name:'NoteEdit',
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
