<template>
  <div class="all-todos">
    <!-- make a list of todos -->
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(todo, index) in todos"
            :key="index"
          >
            <span
              class="circle"
              :class="{ 'todo.completed': true }"
              @click="markDone"
            >
            </span>
            {{ todo.name }}
            <hr />
          </li>
        </ul>
      </div>
      <Navigation/>
    </div>
  </div>
</template>

<script>
import taskData from "../assets/tasks.json";
import Navigation from "./Navigation.vue";

export default {
  data() {
    return {
      todos: taskData,
    };
  },
  components: {
    Navigation,
  },
  mounted() {
    this.markDone();
  },

  methods: {
    markDone() {
      // this.todos.completed = true;
      // alert('done')
      this.todos.completed = !this.todos.completed;

      // apply strikethrough
      if (this.todos.completed) {
        this.todos.completed = true;
      }

      // remove the todo from the list
      // this.todos.splice(this.todos.index, 1);
      console.log(this.todos);
    },
  },
};
</script>

<style>
ul > li {
  list-style: none;
  padding: 0 10px;
  /* border-bottom: 1px solid #fff; */
  color: #fff;
  font-size: 1.2rem;
  /* font-weight: 500; */
}

/* strikethrough */
.completed {
  text-decoration: line-through;
  color: #fff;
}

.details,
.status {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  /* color: #fff; */
  /* font-size: 1.2rem; */
}
.status {
  gap: 2px;
}

span.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-bottom: 0;
  border-radius: 50%;
  background: #fff;
}
</style>