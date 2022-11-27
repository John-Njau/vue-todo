<template>
  <main>
    <!-- switch themes -->
    <div class="container-fluid todo-dark">
      <div class="app-header">
        <span class="title"> {{ capitalizeTitle }} </span>
        <span @click="switchTheme" class="theme-switcher">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </span>
      </div>
      <!-- input section to add todos -->
      <div class="todo-input">
        <label class="todo-list-item-label">
          <!-- <span></span> -->
          <span class="input-typing">Currently typing </span>
          <input
            type="text"
            class="form-control"
            v-model="todos.name"
            @keyup.enter="addTodo"
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
      newTodo: "",
      todos: taskData,
      title: "todo",
    };
  },
  computed: {
    // make title capitalized
    capitalizeTitle() {
      return this.title.toUpperCase();
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
      document.body.classList.toggle("todo-light");
      console.log("Theme switched");
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

.todo-dark {
  background-image: url("../assets/images/bg-desktop-light.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 24px;
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
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
}

.todo-input input {
  // width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  height: 40px;
  // font-size: 1.5rem;
  // font-weight: 500;
  // color: #000;
}

.todo-list-item-label::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid hsl(236, 33%, 92%);
}
</style>
