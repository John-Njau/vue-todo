<template>
  <main class="">
    <div class="card">
      <HomeComp />
    </div>
    <!-- <HomeComp /> -->
    <section v-if="activeTodos">
      <TodoCard
        v-for="(todo, index) in getActiveTodos()"
        :key="index"
        :todo="todo"
      ></TodoCard>
    </section>
    <section v-else>
      <div>No active todos</div>
    </section>
    <Navigation />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoCard from "@/components/TodoCard.vue";
import Navigation from "@/components/Navigation.vue";

// import from vuex
// import { mapActions, mapGetters } from "vuex";

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
    TodoCard,
    Navigation,
  },
  computed: {
    // ...mapGetters(["activeTodos"]),
    activeTodos() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
  },
  methods: {
    // ...mapActions(["getActiveTodos"]),
    getActiveTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },

  // computed: {
  //   todosLeft() {
  //     return this.todos.filter((todo) => !todo.completed).length;
  //   },
  //   ActiveTodos() {
  //     return this.todos.filter((todo) => !todo.completed).length;
  //   },
  //   CompletedTodos() {
  //     return this.todos.filter((todo) => todo.completed).length;
  //   },
  // },

  // methods: {
  // deleteTodo(index) {
  //   this.todos.splice(index, 1);
  // },
  // clearCompleted() {
  //   this.todos = this.todos.filter((todo) => !todo.completed);
  // },
  // dragTodos() {
  //   return this.todos.filter((todo) => todo.drag);
  // },
  // getActiveTodos() {
  //   return this.todos.filter((todo) => !todo.completed);
  // },
  // getCompletedTodos() {
  //   return this.todos.filter((todo) => todo.completed);
  // },

  // startDrag(e, todo) {
  //   e.dataTransfer.dropEffect = "move";
  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("todoId", todo.id);
  //   this.drag = true;
  // },
  // onDrop(e) {
  //   const todoId = e.dataTransfer.getData("todoId");
  //   const todo = this.todos.find((todo) => todo.id === todoId);
  //   const todoIndex = this.todos.indexOf(todo);
  //   this.todos.splice(todoIndex, 1);
  // },
  // },
};
</script>


<style>
</style>