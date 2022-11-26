<template>
  <section class="details">
    <div>{{ todosLeft }} Items left</div>
    <div class="status">
      <router-link to="/">All</router-link>
      <router-link to="/active">Active</router-link>
      <router-link to="/completed">Completed</router-link>
    </div>
    <div @click="clearCompleted()">Clear Completed</div>
  </section>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    activeTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    todosLeft() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
  },

  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.$watch("todos", () => {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    });
    this.clearCompleted;
  },

  methods: {
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      alert("cleared");
    },
  },
};
</script>

<style>
</style>