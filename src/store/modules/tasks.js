import tasks from "../../assets/tasks.json";

export default {
  state: {
    tasks: [],
  },
  mutations: {
    // setTasks(state, tasks) {},

    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId) {
      state.tasks.splice(state.tasks.indexOf(taskId), 1);
    },

    // stores state of tasks in local storage
    storeTasks(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateStoredTasks(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
    },
    removeStoredTasks() {
      localStorage.removeItem("tasks");
    },
  },
  actions: {
    addTask({ commit }, task) {
      const newTask = {
        id: Date.now(),
        title: task,
        completed: false,
      };
      commit("addTask", newTask);
    },
    deleteTask({ commit }, taskId) {
      commit("removeTask", taskId);
    },
    checkLocalStorage({ commit }) {
        // if there is no tasks in local storage, add tasks from json file
      if (localStorage.getItem("tasks")) {
        commit("updateStoredTasks");
      } else {
        commit("storeTasks");
      }
    },
    storeTasks({ commit }) {
      commit("storeTasks");
    }
  },
  getters: {},
};
