<template>
  <div class="container">
    <div v-if="loading">
      <transition name="move-1">
        <div class="circle circle-1"></div>
      </transition>
      <transition name="move-2">
        <div class="circle circle-2"></div>
      </transition>
    </div>
    <component is="app-tasks" v-if="!loading"></component>
  </div>
</template>

<script>
  import Tasks from './components/Tasks.vue'
  export default {
    data() {
      return {
        loading: true
      }
    },
    methods: {
      preloader() {
        this.loading= false;
      }
    },
    components: {
      appTasks: Tasks
    },
    created() {
      setTimeout( this.preloader , 2000);
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

  .circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  top: 350px;
}

.circle-1 {
  background-color: #0074D9;
  left: 33%;
  animation: move-1 2s linear infinite;
}

.circle-2 {
  background-color: #FF4136;
  left: 66%;
  animation: move-2 2s linear infinite;
}

@keyframes move-1 {
  0% {
    background-color: #0074D9;
    left: 33%;
  }
  100% {
    background-color: #FF4136;
    left: 66%
  }
}

@keyframes move-2 {
  0% {
    background-color: #FF4136;
    left: 66%;
  }
  100% {
    background-color: #0074D9;
    left: 33%
  }
}
</style>
