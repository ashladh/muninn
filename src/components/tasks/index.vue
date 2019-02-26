<template>
  <div>
    <div class="index-actions">
        <router-link :to="{name: 'TaskNew'}" class="button">
          <span class="button-text"> Nouvelle tâche </span>
          <i class="fas fa-plus"></i>
        </router-link>
    </div>

    <div id="tasks-container">
      <task-preview v-for="task in tasks" v-bind:task="task" :key="task.id"></task-preview>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import TaskPreview from '@/components/tasks/_preview'


export default {
    name: 'TasksIndex',
    components: {TaskPreview},
    data: function () {
        return {
            tasks: store.tasks
        }
    }
}
</script>


<style>
</style>
