<template>
  <main>
    <!-- <HomeComp /> -->
    <!-- switch themes -->
    <div class="container-fluid theme-mode">
      <div class="title-theme">
        <span class="title"> {{ titleCaps }} </span>
        <span @click="switchTheme" class="theme-switch">
        </span>
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
    <TodoComp />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoComp from "@/components/TodoComp.vue";
import taskData from "../assets/data/todos.json";

export default {
  name: "HelloWorld",
  todos: [],
  components: {
    TodoComp,
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
        name: this.todos.name,
        completed: false,
      });
      this.todos.name = "";
    },

    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
