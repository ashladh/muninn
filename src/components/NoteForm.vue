<template>
    <div class="note-form">
        <textarea class="form-note-content" v-model="note.text"> </textarea>
        <button @click="noteSubmit">Enregistrer</button>
    </div>
</template>

<script>
import store from '@/store'
import Note from '@/models/note'

export default {
    name: 'NoteForm',
    props: ['note'],
    methods: {
        noteSubmit: function () {
            this.$emit('submit', this.note)
        }
    }
}
</script>

<style>
.form-note-content {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>