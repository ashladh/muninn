<template>
    <div>
        <item-actions :item="note" name="Note"></item-actions>
        <div class="note-display" v-markdown-to-html>{{ note.text }}</div>
    </div>
</template>


<script>
import Note from '@/models/note'
import router from '@/router'
import ItemActions from '@/components/shared/_item_actions'

export default {
    components: {ItemActions},
    name: 'NoteShow',
    computed: {
        note: function () {
            return Note.find(this.$route.params.id)
        }
    },
    methods: {
        deleteNote: function (note) {
            Note.delete(note)
            router.push({name: 'NotesIndex'})
        }
    }
}
</script>


<style scoped>
.note-display {
    border-radius: 10px;
    border: 5px solid #ff7657;
    background-color: white;
    height: auto;
    width: 60%;
    padding: 10px;
    margin: auto;
}
</style>
