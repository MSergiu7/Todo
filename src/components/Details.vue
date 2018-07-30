<template>
  <div class="details" v-if="task">
    <h1 class="list-title">Detalii:</h1>
    <input type="text" v-model="task.name">
    <p>{{ this.task.name }}</p>
  </div>
</template>

<script>
  import { taskBus } from '../main.js'
  export default {
    data() {
      return {
        task: null
      }
    },
    watch: {
      task() {
        taskBus.$emit('taskEdited', this.task)
      }
    },
    created() {
      taskBus.$on('taskSelected', (task) => {
        this.task = task;
      })
    }
  }
</script>

<style>
</style>
