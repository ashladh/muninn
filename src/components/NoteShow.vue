<template>
    <div>
        <div id="showmode-icons">
            <router-link :to="{ name: 'NoteEdit', params: { id: note.id }}"><fa-icon name="edit"></fa-icon></router-link>
            <span @click="deleteNote(note)"><fa-icon name="trash-alt"></fa-icon></span>
        </div>
        <div id="note-display" class="displayed-note-content" v-markdown-to-html>{{ note.text }}</div>
    </div>
</template>


<script>
import Note from '../models/note'
import FaIcon from '@/components/FaIcon'

export default {
    components: {FaIcon},
    name: 'NoteShow',
    computed: {
        note: function () {
            return Note.find(this.$route.params.id)
        }
    }
}
</script>


<style scoped>
#note-display {
    border-radius: 10px;
    border: 5px solid #ff7657;
    background-color: white;
    height: auto;
    width: 60%;
    padding: 10px;
    margin: auto;
}
.far {
    font-size: 2em;
    color:#ff7657;
}

#showmode-icons {
    margin: auto;
    width: 95%;
    text-align: center;
    padding-bottom: 30px;
    padding-top: 15px;
    display: inline-block;
}

</style>
