import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://todo-9aebe.firebaseio.com/';

export const taskBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
