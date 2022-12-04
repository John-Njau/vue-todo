<template>
  <main>
    <HomeComp />
    <div class="complete-active">Completed Todos</div>
    <section v-if="completedTodos">
      <TodoComp
        v-for="(todo, index) in getCompletedTodos()"
        :key="index"
        :todo="todo"
      ></TodoComp>
    </section>
    <section v-else class="complete-active">
      <div>No completed todos</div>
    </section>
    <Navigation />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoComp from "@/components/TodoComp.vue";
import Navigation from "@/components/Navigation.vue";
import todoData from "../assets/data/todos.json";

// import getters from vuex
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      todos: todoData,
      drag: false,
    };
  },
  components: {
    HomeComp,
    TodoComp,
    Navigation,
  },

  computed: {
    ...mapGetters(["completedTodos"]),
  },
  methods: {
    getCompletedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
};
</script>


<style>
</style>