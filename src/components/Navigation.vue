<template>
  <section class="todo-details">
    <div>{{ todosLeft }} Items left</div>
    <div class="todo-status">
      <router-link to="/">All</router-link>
      <router-link to="/active">Active {{ ActiveTodos }}</router-link>
      <router-link to="/completed">Completed {{ CompletedTodos }}</router-link>
    </div>
    <div @click="clearCompleted()">Clear Completed</div>
  </section>
</template>

<script>
export default {
  props: {
    todosLeft: Number,
    ActiveTodos: Number,
    CompletedTodos: Number,
  },
  methods: {
    clearCompleted() {
      this.$emit("clearCompleted");
    },
  },
};
</script>

<style>
</style>