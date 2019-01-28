<template>
    <div>
        <div class="displayed-note-content" v-markdown-to-html>{{ note.text }}</div>
    </div>
</template>


<script>
import Note from '../models/note'

export default {
    name: 'NoteShow',
    computed: {
        note: function () {
            return Note.find(this.$route.params.id)
        }
    }
}
</script>


<style scoped>

</style>
