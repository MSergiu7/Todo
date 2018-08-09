import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks'
import task from './modules/task'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    task
  }
});
