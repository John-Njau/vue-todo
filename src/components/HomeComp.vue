<template>
  <main>
    <!-- switch themes -->
    <div class="container-fluid theme-mode">
      <div class="title-theme">
        <span class="title"> {{ titleCaps }} </span>
        <span @click="switchTheme" class="theme-switch"> </span>
      </div>
    </div>
  </main>
</template>
  
  <script>
import taskData from "../assets/data/todos.json";

export default {
  name: "HelloWorld",
  todos: [],
  components: {},

  data() {
    return {
      todos: taskData,
      title: "todo",
      theme: "light",
    };
  },
  computed: {
    titleCaps() {
      return this.title.toUpperCase();
    },
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme;
    },
  },

  methods: {
    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
.title-theme {
  display: flex;
  justify-self: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 50%;
  margin: auto auto;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.todo-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 50%;
  background-color: var(--todo-card-background);
  border-radius: 0.5rem;
  padding: 1rem;
}

.todo-label::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: var(--todo-card-background);
  border: 1px solid hsl(233, 14%, 35%); //dark mode
}
</style>
  