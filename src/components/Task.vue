<template>
  <li class="success" @click="taskSelected">
    <p :class="{ cut: task.hasLine }">{{ task.name }}</p>
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
      taskBus.$on('taskEdited', (id, name) => {
        if (this.task.id == id) {
          this.task.name = name;
        }
      })
    }
  }
</script>

<style>
</style>
