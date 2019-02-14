<template>
    <div class="form">
        <span class="input">
            <textarea v-model="note.text"></textarea>
        </span>
        <button @click="noteSubmit">Enregistrer</button>
    </div>
</template>

<script>
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
</style>