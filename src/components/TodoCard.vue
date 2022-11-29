<template>
  <div class="todo-page">
    <!-- make a list of todos -->
    <div class="card">
      <ul class="todo-list" @dragover.prevent @dragenter.prevent>
        <li
          class="todo-list-item drag-el"
          draggable="true"
          @dragstart="startDrag($event, todo)"
        >
          <label class="todo-label">
            <input
              type="checkbox"
              v-model="todo.completed"
              name="done"
              id="done"
              @onClick="markDone"
            />
            <span class="todo-list-text">{{ todo.name }}</span>
          </label>
          <span class="delete-todo" title="Delete todo" @click="deleteTodo"
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
    </div>
  </div>
</template>

<script>
import todoData from "../assets/data/todos.json";

export default {
  data() {
    return {
      todos: todoData,
      drag: false,
    };
  },
  props: ["todo"],

  computed: {
    todosLeft() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    ActiveTodos() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    CompletedTodos() {
      return this.todos.filter((todo) => todo.completed).length;
    },
  },

  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    dragTodos() {
      return this.todos.filter((todo) => todo.drag);
    },
    getActiveTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    getCompletedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },

    startDrag(e, todo) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("todoId", todo.id);
      this.drag = true;
    },
    onDrop(e) {
      const todoId = e.dataTransfer.getData("todoId");
      const todo = this.todos.find((todo) => todo.id === todoId);
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

<style lang="scss">
ul > li {
  list-style: none;
  padding: 0 10px;
  color: #fff;
  font-size: 1.2rem;
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