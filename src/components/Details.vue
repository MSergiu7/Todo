<template>
  <div class="details" v-if="task">
    <h1 class="list-title">Detalii:</h1>
    <div>
      <p>Change task name:</p>
      <input type="text" v-model="task.name" @keyup="changeTask">
    </div>
    <div>
      <p>Completed</p>
      <input type="checkbox" :class="{ cut: task.hasLine }" @click="task.hasLine = !task.hasLine" :checked="task.hasLine" >
    </div>
    <button class="save" @click="putTask">Save</button>
    <button class="remove" @click="deleteTask">Delete this task</button>
  </div>
</template>

<script>
  import { taskBus } from '../main.js'
  import axios from 'axios'
  export default {
    data() {
      return {
        task: null
      }
    },
    methods: {
      changeTask() {
        taskBus.$emit('taskEdited', this.task.id, this.task.name);
      },
      putTask() {
        axios.put('tasks/' + this.task.id + '.json', {
          name: this.task.name,
          hasLine: this.task.hasLine
        })
      },
      deleteTask() {
        axios.delete('tasks/' + this.task.id + '.json');
        this.$emit('taskDeleted', this.task);
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
