<template>
  <div class="all-todos">
    <!-- make a list of todos -->
    <div class="card">
      <ul class="todo-list">
        <li class="todo-list-item" v-for="todo in todos" :key="todo.id">
          <label class="todo-list-item-label">
            <input type="checkbox" @onClick="markDone" />
            <span class="todo-list-item-text">{{ todo.name }}</span>
          </label>
          <span
            class="delete-todo"
            title="Delete todo"
            @click="deleteTodo"
            style="background-image: url('../assets/images/ICON-CROSS.svg')"
            ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fill-rule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </span>
          <hr class="hr" />
        </li>
      </ul>

      <section class="todo-details">
        <div>{{ todosLeft }} Items left</div>
        <div class="todo-status">
          <router-link to="/">All</router-link>
          <router-link to="/active">Active</router-link>
          <router-link to="/completed">Completed</router-link>
        </div>
        <div @click="clearCompleted()">Clear Completed</div>
      </section>
      <!-- <Navigation /> -->
    </div>
  </div>
  <div class="drag-drop">Drag and drop to reorder list</div>
</template>

<script>
import todoData from "../assets/data/todos.json";
import Navigation from "./Navigation.vue";

export default {
  data() {
    return {
      todos: todoData,
    };
  },
  components: {
    Navigation,
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
    // this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    // this.$watch("todos", () => {
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // });
    // this.clearCompleted;
  },

  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    getActiveTodos() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    clearCompleted() {
      this.todos = this.getActiveTodos();
    },
    markDone() {
      this.todos.completed = true;
    },
  },
};
</script>

<style>
ul > li {
  list-style: none;
  padding: 0 10px;
  color: #fff;
  font-size: 1.2rem;
}

.todo-details {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 0 15px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: smaller;
  color: hsl(235, 19%, 35%);
}

.todo-status {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  gap: 8px;
}

.all-todos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto auto;
  margin-top: -28px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
}

.delete-todo {
  cursor: pointer;
  color: hsl(235, 19%, 35%);
  font-size: 1.2rem;
  /* font-weight: 600; */
  margin-right: 10px;
  float: right;
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