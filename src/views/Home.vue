<template>
  <main>
    <HomeComp />
    <TodoComp
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo">
    </TodoComp>
    <Navigation  />
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoCard from "@/components/TodoCard.vue";
import TodoComp from "@/components/TodoComp.vue";
import Navigation from "@/components/Navigation.vue";
import todoData from "../assets/data/todos.json";

export default {
  data() {
    return {
      todos: todoData,
      drag: false,
    };
  },
  components: {
    HomeComp,
    TodoCard,
    TodoComp,
    Navigation,
  },
};
</script>

<style lang="scss">


.delete-todo {
  cursor: pointer;
  color: hsl(235, 19%, 35%);
  font-size: 1.2rem;
  /* font-weight: 600; */
  margin-right: 10px;
  float: right;
  display: none;
}

.drag-drop {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: auto auto;
  margin-top: 40px;
  color: hsl(235, 19%, 35%);
}
</style>