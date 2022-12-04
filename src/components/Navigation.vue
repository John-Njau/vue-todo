<template>
  <section class="nav-page">
    <div>{{ todosLeft }} Items left</div>
    <div class="todo-status">
      <router-link to="/">All</router-link>
      <router-link to="/active">Active </router-link>
      <router-link to="/completed">Completed </router-link>
    </div>
    <div @click="clearCompleted()">Clear Completed</div>
  </section>
  <div class="drag-drop">Drag and drop to reorder list</div>
</template>

<script>
// mapAction
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      drag: false,
      todos: [],
    };
  },
  computed: {
    ...mapGetters(["todosLeft", "activeTodos", "completedTodos"]),
  },
  methods: {
    // ...mapActions(["clearCompleted"]),
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>

<style>
</style>