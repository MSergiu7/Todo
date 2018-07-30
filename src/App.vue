<template>
  <div class="container">
    <component is="app-tasks"></component>
  </div>
</template>

<script>
  import Tasks from './components/Tasks.vue'
  export default {
    components: {
      appTasks: Tasks
    }
  }
</script>

<style>
  .container {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    font-family: 'Timesnewroman', Arial;
  }
</style>
