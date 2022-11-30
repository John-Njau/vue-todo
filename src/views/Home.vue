<template>
  <main>
    <HomeComp />
    <TodoComp
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo">
    </TodoComp>
    <Navigation />
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

.todo-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--todo-bottom-border);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    // background-color: hsl(233, 11%, 84%);
    .delete-todo {
      display: block;
    }
  }
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