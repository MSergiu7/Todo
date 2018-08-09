const state = {
  task: []
};

const getters = {
  getTask(state) {
    return state.task;
  }
}

const mutations = {
  SET_TASK(state, task) {
    state.task = task;
  }
};

const actions = {
  SET_TASK({commit}, task) {
    commit('SET_TASK', task);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
