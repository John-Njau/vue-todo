<template>
  <main>
    <HomeComp />
    <TodoCard
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    ></TodoCard>
    <Navigation />
    <div class="drag-drop">Drag and drop to reorder list</div>
  </main>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import TodoCard from "@/components/TodoCard.vue";
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
    Navigation,
  },
};
</script>

<style lang="scss">
.todo-details {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 10px 15px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: smaller;
  color: hsl(233, 10%, 64%);
}

.todo-details {
  padding: 10px 10px;
  a {
    &:hover {
      color: hsl(233, 10%, 64%);
    }
  }
}

.todo-status {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  gap: 8px;
  font-weight: 700;

  a {
    font-weight: bold;
    // color: hsl(235, 19%, 35%);
    color: hsl(233, 10%, 64%);

    text-decoration: none;

    &.router-link-exact-active {
      color: hsl(220, 98%, 61%);
    }
    &:hover {
      // color: hsl(240, 100%, 100%);
      color: var(--todo-item-text);
    }
  }
}

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