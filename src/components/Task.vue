<template>
  <li class="success" @click="taskSelected">
    <p :class="{ cut: task.hasLine }">{{ task.name }}</p>
    <!-- <p class="remove">X</p>
    <input type="checkbox" class="task-checkbox"> -->
  </li>
</template>

<script>
  import { taskBus } from '../main.js'
  export default {
    props: ['task'],
    methods: {
      taskSelected() {
        taskBus.$emit('taskSelected', this.task)
      }
    },
    created() {
      taskBus.$on('taskEdited', (name) => {
        this.task.name = name;
      })
    }
  }
</script>

<style>
</style>
