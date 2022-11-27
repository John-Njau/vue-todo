<template>
  <main>
    <!-- switch themes -->
    <div class="container-fluid todo-theme-mode">
      <div class="app-header">
        <span class="title"> {{ capitalizeTitle }} </span>
        <span @click="switchTheme" class="theme-switcher">
          <!-- <svg
            v-if="switchTheme"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg> -->
        </span>
      </div>
      <!-- input section to add todos -->
      <div class="todo-input">
        <label class="todo-list-item-label">
          <input
            type="text"
            class="form-control"
            v-model="todos.name"
            @keyup.enter="addTodo"
            placeholder="Create a new todo..."
          />
        </label>
      </div>
    </div>
    <!-- make a list of todos -->
    <TodoComp />
    <!-- <Navigation /> -->
  </main>
</template>

<script>
import TodoComp from "./TodoComp.vue";
import Navigation from "./Navigation.vue";
import taskData from "../assets/data/todos.json";

export default {
  name: "HelloWorld",
  todos: [],
  components: {
    TodoComp,
    Navigation,
  },

  data() {
    return {
      todos: taskData,
      title: "todo",
      theme: "light",
    };
  },
  computed: {
    // make title capitalized
    capitalizeTitle() {
      return this.title.toUpperCase();
    },
  },
  watch: {
    // theme(theme) {
    //   if (this.theme === "light") {
    //     document.body.classList.add("todo-light");
    //     document.body.classList.remove("todo-dark");
    //   } else {
    //     document.body.classList.add("todo-dark");
    //     document.body.classList.remove("todo-light");
    //   }
    // },
    theme(theme) {
      document.documentElement.dataset.theme = theme;
    },
  },

  methods: {
    addTodo: function () {
      if (!this.todos.name) {
        return;
      }
      this.todos.push({
        name: this.todos.name,
        completed: false,
      });
      this.todos.name = "";
    },

    switchTheme() {
      // document.body.classList.toggle("todo-light");
      // console.log("Theme switched");
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    toggleTheme() {
      document.body.classList.toggle("todo-light");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-header {
  display: flex;
  // justify-self: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 50%;
  margin: auto auto;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.todo-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 50%;
  background-color: var(--bg-todo-card);
  border-radius: 0.5rem;
  padding: 1rem;
}



.todo-list-item-label::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: var(--bg-todo-card);
  border: 1px solid hsl(233, 14%, 35%) //dark mode
}
</style>
