<template>
    <div>
        <item-actions :item="note" name="Note"></item-actions>
        <div class="box note-show-box" v-markdown-to-html>{{ note.text }}</div>
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


<style>
</style>
