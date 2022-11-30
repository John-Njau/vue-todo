<template>
  <main>
    <!-- switch themes -->
    <div class="theme-mode">
      <div class="title-theme">
        <span class="title"> {{ titleCaps }} </span>
        <span @click="switchTheme" class="theme-switch"> </span>
      </div>
      <!-- input section to add todos -->
      <div class="todo-input">
        <label class="todo-label">
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
    <TodoComp v-for="todo in todos" :key="todo.id" :todo="todo" />
    <Navigation />
  </main>
</template>

<script>
import TodoComp from "../components/TodoComp.vue";
import Navigation from "@/components/Navigation.vue";
import taskData from "../assets/data/todos.json";

export default {
  name: "HomeView",
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
      console.log(this.todos);

      // clear the input field
      this.todos.name = "";
    },

    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    // clear completed todos

    // mark todo as completed
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-theme {
  display: flex;
  justify-self: center;
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
  background-color: var(--todo-card-background);
  border-radius: 0.5rem;
  padding: 1rem;
}

.todo-label::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: var(--todo-card-background);
  border: 1px solid hsl(233, 14%, 35%); //dark mode
}
</style>
