<template>
    <div id="contact-form">
        <textarea id="new-contact"> </textarea>
        <button @click="addNote">Enregistrer</button>
    </div>
</template>

<script>
import store from '../store'
import Note from '../models/note'

export default {
    name: 'ContactNew',
    data: function () {
        return {
            notes: store.notes,
            newNote: '',
        }
    },
    methods: {
        addNote: function () {
            var note = new Note({text: this.newNote})
            this.notes.push(note)
            Note.saveToLocalStorage()
            this.newNote = ''
            this.$emit('note-added')
        }
    }
}
</script>

<style scoped>
#new-contact {
    height: 200px;
    width: 60%;
    border-radius: 10px;
    border: 5px solid #ff7657;
    outline-style: none;
}

</style>