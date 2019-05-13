<template>
    <div class="form">
        <h1>Nouvelle note</h1>
        <span class="input">
            <textarea v-model="note.text"></textarea>
        </span>
        <button @click="noteSubmit" class="button button-text">Enregistrer</button>
    </div>
</template>

<script>
import utils from '@/utils'

export default {
    name: 'NoteForm',
    props: ['note'],
    methods: {
        noteSubmit: function () {
            const params = utils.permit(this.note, ['text'])
            this.$emit('submit', params)
        }
    }
}
</script>

<style>
</style>