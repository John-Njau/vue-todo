<template>
  <main>
    <!-- switch themes -->
    <div class="container-fluid todo-dark">
      <div class="">
        <span class="title"> {{ capitalizeTitle }} </span>
        <span @click="switchTheme" class="theme-switcher">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
        </span>
      </div>
      <!-- input section to add todos -->
      <div class="input-section">
        <input
          type="text"
          class="form-control"
          placeholder="Create a new todo..."
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </div>
    </div>
    <!-- make a list of todos -->
    <TodoComp />
    <!-- <Navigation /> -->
  </main>
</template>

<script>
import TodoComp from "./TodoComp.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "HelloWorld",
  todos: [],
  components: {
    TodoComp,
    Navigation,
  },

  data() {
    return {
      newTodo: "",
      todos: [],
      title: "todo",
    };
  },
  computed: {
    // make title capitalized
    capitalizeTitle() {
      return this.title.toUpperCase();
    },
  },

  mounted() {
    this.switchTheme();
    this.addTodo();
  },

  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      alert("Added");
    },
    switchTheme() {
      document.body.classList.toggle("todo-light");
      console.log("Theme switched");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-dark {
  background-image: url("../assets/images/bg-desktop-dark.jpg");
  padding: 24px;
}

svg {
  width: 26px;
  height: 26px;
  // display: flex;
  // justify-self: right;
  float: right;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.input-section {
  margin: auto auto;
  display: flex;
  justify-content: center;
}
input {
  width: 100%;
  max-width: 500px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #3b5360;
  color: #fff;
}

.all-todos {
  margin: auto auto;
  margin-top: -12px;
  width: 50%;
  padding: 10px 0;
  // display: flex;
  // justify-content: center;
  background-color: #3b5360;
}

.todo-light {
  background-color: yellow;
}
</style>
