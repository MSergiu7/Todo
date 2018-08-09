import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/store'

axios.defaults.baseURL = 'https://todo-9aebe.firebaseio.com/';

export const taskBus = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
