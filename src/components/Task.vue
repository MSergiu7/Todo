<template>
  <transition name="fade" mode="out-in">
    <li :class="{success: true, selected: task.isSelected }" @click="taskSelected">
      <p :class="{ cut: task.hasLine }">{{ task.name }}</p>
    </li>
  </transition>
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
      taskBus.$on('taskEdited', (task) => {
        if (this.task.id == task.id) {
          this.task.name = task.name;
        }
      })
    }
  }
</script>

<style>

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
    /* but it's default set to 1 so i can delete this */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
