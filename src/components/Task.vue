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
      },
      // addRemoveLine() {
      //
      //   taskBus.$emit('addRemoveLine', this.task.hasLine);
      // }
    },
    created() {
      taskBus.$on('taskEdited', (task) => {
        this.task = task;
      })
    }
  }
</script>

<style>
</style>
