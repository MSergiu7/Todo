const state = {
  tasks: []
};

const getters = {
  getTasks: state => {
    return state.tasks;
  }
}

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  }
};

const actions = {
  SET_TASKS: ({commit}, tasks) => {
    commit('SET_TASKS', tasks);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
