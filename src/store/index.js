import { createStore } from "vuex";

const state = {
  tasks: [
    { id: 1, title: "wakeup from sleep", description: "wakeup from sleep" },
    { id: 2, title: "pray the fajr sala", description: "pray the fajr sala" },
  ],
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  addTask(state, task) {
    state.tasks.push(task);
  },
  updateTask(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
};

const actions = {
  // Your async actions here (e.g., API calls)
};

const getters = {
  // Your getters here
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
