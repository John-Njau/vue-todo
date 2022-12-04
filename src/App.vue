<template>
  <main>
    <HomeView />
    <!-- <router-view /> -->
  </main>
</template>

<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Rubik:wght@400;700&display=swap");

:root {
  --desktop-background: hsl(236, 33%, 92%);
  --checkmark-color: hsl(280, 87%, 65%);
  --checkmark-shadow: hsl(192, 100%, 67%);
  --todo-card-background: hsl(0, 0%, 98%);
  --top-background-image: url(./assets/images/bg-desktop-light.jpg);
  --theme-icon: url(./assets/images/ICON-MOON.svg);
  --todo-checkbox: 1px solid hsl(236, 33%, 92%);
  --todo-item-text: hsl(235, 19%, 35%);
  --todo-bottom-border: hsl(236, 33%, 92%);
  --todo-input: hsl(235, 19%, 35%);

  @media screen {
    &[data-theme="dark"] {
      --desktop-background: hsl(235, 21%, 11%);
      --todo-card-background: hsl(235, 24%, 19%);
      --top-background-image: url(./assets/images/bg-desktop-dark.jpg);
      --theme-icon: url(./assets/images/ICON-SUN.svg);
      --todo-checkbox: 1px solid hsl(233, 14%, 35%);
      --todo-item-text: hsl(234, 39%, 85%);
      --todo-bottom-border: hsl(233, 14%, 35%);
      --todo-input: hsl(234, 39%, 85%);
    }
    .todo-page {
      background-color: var(--todo-card-background);
    }
    .theme-mode {
      background-image: var(--top-background-image);
    }
    .todo-label::before {
      border: var(--todo-checkbox);
    }
    &hover {
      color: hsl(233, 10%, 64%);
    }

    .hr {
      border: 1px solid var(--todo-bottom-border);
    }
  }
}

* {
  margin: 0 0 0 0;
  // padding: 0 0 0 0;
}

#app {
  font-family: "Josefin Sans", sans-serif;
  // font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  font-size: 19px;
  background: var(--desktop-background);
  height: 100vh;
}

.theme-switch {
  background-image: var(--theme-icon);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: center;
  width: 2rem;
  height: 2rem;
}

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

.todo-list-item input {
  width: 1.5rem;
  height: 1.5rem;
  border: var(--todo-checkbox);
  border-radius: 50%;
  background-image: url("./assets/images/ICON-CHECK.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0px;
  transition: 0.2s;
  margin-right: 18px;
  flex-shrink: 0;
  margin-top: 14px;
  appearance: none;
  cursor: pointer;
}

.todo-list-item input:hover {
  border-color: var(--checkmark-color);
}

.hr {
  /* border: 1px solid hsl(235, 19%, 35%); */
  border: 1px solid var(--todo-bottom-border);
  /* margin: 0 10px; */
}

.todo-list-item input:checked {
  // box-shadow: 0 0 0 3px var(--checkmark-shadow);
  background-size: 10px;
  // border: 1px solid var(--checkmark-color);
  // background-color: var(--checkmark-color);
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-size: cover;
}

.todo-list-item input:checked + span {
  color: hsl(236, 9%, 61%);
  text-decoration: line-through;
  border-color: var(--checkmark-color);
  background-size: 10px;
}
.todo-list-text {
  color: var(--todo-item-text);
  font-weight: 500;
  font-size: 16px;
}

.card,
.todo-label {
  width: 100%;
}

.todo-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto auto;
  margin-top: -28px;
  border-radius: 5px;
}

.theme-mode {
  background-image: var(--top-background-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 24px;
}

.todo-label input::placeholder {
  color: hsl(236, 9%, 61%);
  font-weight: 500;
  font-family: "Josefin Sans", sans-serif;
}

.todo-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-input input {
  border: none;
  outline: none;
  background-color: transparent;
  height: 40px;
  color: var(--todo-input);
  font-family: "Josefin Sans", sans-serif;
}

@media screen and (max-width: 768px) {
  .todo-page {
    width: 90%;
  }
  .title-theme {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--desktop-background);
    width: 100% !important;
  }
  .todo-input {
    width: 90% !important;
  }

  .cross {
    display: none !important;
  }

  .todo-label {
    width: 90% !important;
  }
}
</style>
