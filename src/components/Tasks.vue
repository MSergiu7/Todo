<template>
  <div class="tasks">
    <div class="form-group">
      <label for="task">Task:</label>
      <input type="text" class="form-control" id="task-input" v-model="newTask">
      <button id="addTask" @click="addTask">Add</button>
    </div>

    <div>
      <h2>Filter the tasks:</h2>
      <input type="radio" value="completed" v-model="option">
      <label for="completed">Completed</label>
      <input type="radio" value="uncompleted" v-model="option">
      <label for="uncompleted">Uncompleted</label>
      <input type="radio" value="all" v-model="option">
      <label for="all">All</label>
      <br>
    </div>

    <p class="list-title">To do:</p>
    <ul class="list">
      <component is="app-task" v-for="(task,index) in filterTasks" :key="index" :task="task"></component>
    </ul>
    <component is="app-details"></component>

  </div>
</template>

<script>
  import { taskBus } from '../main.js'
  import Task from './Task.vue'
  import Details from './Details.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        option: 'all',
        tasks: [],
        newTask: '',
        node: 'tasks'
      }
    },
    computed: {
      filterTasks() {
        return this.tasks.filter((task) => {
          if (this.option == 'completed') {
            if (task.hasLine) {
              return task;
            }
          } else if (this.option == 'uncompleted') {
            if (task.hasLine == false) {
              return task;
            }
          } else {
            return task;
          }
        })
      }
    },
    components: {
      appTask: Task,
      appDetails: Details
    },
    methods: {
      addTask() {
        axios.post('tasks.json', { name: this.newTask, hasLine: false })
            .then( () => {
              this.fetchData();
            }).catch(error => console.log(error));
      },
      fetchData() {
        axios.get('/tasks.json')
            .then(res => {
              const data = res.data;
              const tasks = []
              for (let key in data) {
                const task = data[key];
                task.id = key;
                tasks.push(task);
              }
              this.tasks = tasks;
            })
      }
    },
    created() {
      this.fetchData();

      taskBus.$on('taskDeleted', (task) => {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1)
      })
    },
  }
</script>

<style>

  .tasks {
    width: 200%;
  }

  .details {
    width: 100%;
  }

  #task-input {
    margin-left: 20px;
    margin-right: 10px;
  }

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  li {
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    text-transform: uppercase;
    border-radius: 5px;
    list-style-position: inside;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    list-style: none;
    display: flex;
    cursor: pointer;
  }

  .list-title {
    margin: 20px 0;
    font-weight: normal;
    padding-left: 0;
    text-transform: capitalize;
    color: #666;
    font-size: 20px;
  }

  p {
    display: inline-block;
    margin: 0;
    line-height: 20px;
  }

  .success {
    background-color: #a2cc41;
  }

  .remove, .save {
    cursor: pointer;
    margin-top: 10px;
  }

  .save {
    margin-right: 10px;
  }

  .task-checkbox {
    margin-left: 10px;
    margin-right: 0;
  }

  .cut {
    text-decoration: line-through;
  }
</style>
