<template>
  <div class="details" v-if="task">
    <h1 class="list-title">Detalii:</h1>
    <input type="text" v-model="task.name" @keyup="changeTask">
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
    methods: {
      changeTask() {
        console.log('ceva');
        taskBus.$emit('taskEdited', this.task.name);
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
