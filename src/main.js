import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://todo-9aebe.firebaseio.com/';

export const taskBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
