<template>
  <main>
    <HomeComp />
    <!-- switch themes -->
    <!-- <div class="title-theme">
        <span class="title"> {{ titleCaps }} </span>
        <span @click="switchTheme" class="theme-switch"> </span>
      </div> -->
    <!-- input section to add todos -->
    <div class="todo-input">
      <label class="todo-label">
        <span>
          <input type="checkbox" class="todo-label-checkbox" id="" />
        </span>
        <span>
          <input
            type="text"
            class="form-control"
            v-model="todos.name"
            @keyup.enter="addTodo"
            placeholder="Create a new todo..."
          />
        </span>
      </label>
    </div>
    <TodoComp v-for="todo in todos" :key="todo.id" :todo="todo" />

    <Navigation />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoComp from "../components/TodoComp.vue";
import Navigation from "@/components/Navigation.vue";
import taskData from "../assets/data/todos.json";

export default {
  name: "HomeView",
  todos: [],
  components: {
    TodoComp,
    Navigation,
    HomeComp,
  },

  data() {
    return {
      todos: taskData,
      title: "todo",
      theme: "light",
    };
  },
  computed: {
    titleCaps() {
      return this.title.toUpperCase();
    },
  },
  watch: {
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
        index: this.todos.length + 1,
        name: this.todos.name,
        completed: false,
      });
      // confirm that the todo has been added
      // console.log(this.todos);

      // clear the input field
      this.todos.name = "";
    },

    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    // clear completed todos

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -64px auto 3rem auto;
  width: 50%;
  background-color: var(--todo-card-background);
  border-radius: 0.5rem;
  padding: 1rem;
}

.todo-label {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
}

.todo-label-checkbox {
  width: 1.4rem;
  height: 1.4rem;
  border: var(--todo-checkbox);
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  margin-right: 0.5rem;
}
</style>
