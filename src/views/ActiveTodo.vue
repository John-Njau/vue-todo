<template>
  <main class="">
    <div class="card">
      <HomeComp />
      <div class="complete-active">Active Todos</div>
    </div>
    <!-- <HomeComp /> -->
    <section v-if="activeTodos">
      <TodoComp
        v-for="(todo, index) in getActiveTodos()"
        :key="index"
        :todo="todo"
      ></TodoComp>
    </section>
    <section class="complete-active" v-else>
      <div>No active todos</div>
    </section>
    <Navigation />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoComp from "@/components/TodoComp.vue";
import Navigation from "@/components/Navigation.vue";

// import from vuex
import { mapActions, mapGetters } from "vuex";

import todoData from "../assets/data/todos.json";

export default {
  data() {
    return {
      todos: todoData,
      // drag: false,
    };
  },
  components: {
    HomeComp,
    TodoComp,
    Navigation,
  },
  computed: {
    ...mapGetters(["activeTodos"]),
   
  },
  methods: {
    // ...mapActions(["getActiveTodos"]),
    getActiveTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>


<style>
</style>