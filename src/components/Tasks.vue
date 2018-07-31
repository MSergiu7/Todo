<template>
  <div class="tasks">
    <div class="form-group">
      <label for="task">Task:</label>
      <input type="text" class="form-control" id="task-input" v-model="newTask">
      <button id="addTask" @click="addTask">Add</button>
    </div>

    <p class="list-title">To do:</p>
    <ul class="list">
      <component is="app-task" v-for="(task,index) in tasks" :key="index" :task="task"></component>
    </ul>
    <component is="app-details"></component>

  </div>
</template>

<script>
  import Task from './Task.vue'
  import Details from './Details.vue'

  export default {
    data() {
      return {
        tasks: [
        ],
        newTask: '',
        node: 'tasks'
      }
    },
    components: {
      appTask: Task,
      appDetails: Details
    },
    methods: {
      addTask() {
        this.resource.saveTask({ name: this.newTask, hasLine: false })
        .then( () => {
          this.fetchData();
          done();
        });
        this.newTask = "";
      },
      fetchData() {
        //get Data
        this.resource.getData({node: this.node})
          .then(response => {
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {
                resultArray.push(data[key]);
              }
              this.tasks = resultArray;
            });
      }
    },
    created() {
      const customActions = {
        saveTask: {method: 'POST', url: 'tasks.json'},
        getData: {method: 'GET'}
      }
      this.resource = this.$resource('{node}.json', {}, customActions);

      this.fetchData();
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

  .remove {
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
  }

  .task-checkbox {
    margin-left: 10px;
    margin-right: 0;
  }

  .cut {
    text-decoration: line-through;
  }
</style>
