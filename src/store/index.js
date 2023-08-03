import { createStore } from "vuex";
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "@/services/taskService";

const state = {
  tasks: [],
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, task) {
    state.tasks = [task, ...state.tasks];
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
  DELETE_TASK(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
};

const actions = {
  async fetchTasksAction({ commit }) {
    try {
      const tasks = await fetchTasks();
      commit("SET_TASKS", tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
  async addTaskAction({ commit }, newTask) {
    try {
      const addedTask = await addTask(newTask);
      commit("ADD_TASK", {
        ...addedTask,
        id: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },
  async updateTaskAction({ commit }, updatedTask) {
    try {
      const updatedTaskResponse = await updateTask(updatedTask);
      commit("UPDATE_TASK", updatedTaskResponse);
    } catch (error) {
      console.error("Error updating task:", error);
      commit("UPDATE_TASK", updatedTask);
    }
  },
  async deleteTaskAction({ commit }, taskId) {
    try {
      await deleteTask(taskId);
      commit("DELETE_TASK", taskId);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
};

const getters = {};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
