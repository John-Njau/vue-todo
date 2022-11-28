<template>
  <main>
    <HomeComp />
    <!-- <router-view /> -->
  </main>
</template>

<script>
import HomeComp from "./components/HomeComp.vue";

export default {
  name: "App",
  components: {
    HomeComp,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");

:root {
  // --checkbox-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  --bg-desktop-color: hsl(236, 33%, 92%);
  --checkbox-color: hsl(280, 87%, 65%);
  --checkbox-shadow: hsl(192, 100%, 67%);
  --bg-todo-card: hsl(0, 0%, 98%);
  --header-bg: url(./assets/images/bg-desktop-light.jpg);
  --theme-svg: url(./assets/images/ICON-MOON.svg);
  --todo-checkbox: 1px solid hsl(236, 33%, 92%);
  --todo-item-text: hsl(235, 19%, 35%);
  --todo-hr: hsl(236, 33%, 92%);
  --todo-input: hsl(235, 19%, 35%);

  @media screen {
    &[data-theme="dark"] {
      --bg-desktop-color: hsl(235, 21%, 11%);
      --bg-todo-card: hsl(235, 24%, 19%);
      --header-bg: url(./assets/images/bg-desktop-dark.jpg);
      --theme-svg: url(./assets/images/ICON-SUN.svg);
      --todo-checkbox: 1px solid hsl(233, 14%, 35%);
      --todo-item-text: hsl(234, 39%, 85%);
      --todo-hr: hsl(233, 14%, 35%);
      --todo-input: hsl(234, 39%, 85%);
    }
    .all-todos {
      background-color: var(--bg-todo-card);
    }
    .todo-theme-mode {
      background-image: var(--header-bg);
    }
    .todo-list-item-label::before {
      border: var(--todo-checkbox);
    }
    &hover {
      color: hsl(233, 10%, 64%);
    }

    .hr {
      border: 1px solid var(--todo-hr);
    }
  }
}

*{
  margin: 0 0 0 0;
  // padding: 0 0 0 0;
}

#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  // font-size: 19px;
  background: var(--bg-desktop-color);
  height: 100vh;
}

.theme-switcher {
  background-image: var(--theme-svg);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: center;
  width: 2rem;
  height: 2rem;
}

.todo-list-item input {
  width: 1.5rem;
  height: 1.5rem;
  border: var(--todo-checkbox);
  border-radius: 50%;
  // background-image: url("data:image/svg+xml;utf8<svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'><path fill='none' stroke='#FFF' stroke-width='2' d='M1 4.304L3.696 7l6-6'/></svg>");
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
  border-color: var(--checkbox-color);
}

.hr {
  /* border: 1px solid hsl(235, 19%, 35%); */
  border: 1px solid var(--todo-hr);
  /* margin: 0 10px; */
}

.todo-list-item input:checked {
  // box-shadow: 0 0 0 3px var(--checkbox-shadow);
  background-size: 10px;
  // border: 1px solid var(--checkbox-color);
  // background-color: var(--checkbox-color);
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-size: cover;
}

.todo-list-item input:checked + span {
  // color: #272727;
  color: hsl(236, 9%, 61%);
  text-decoration: line-through;
  border-color: var(--checkbox-color);
  // box-shadow: 0 0 0 3px var(--checkbox-shadow);
  background-size: 10px;
}
.todo-list-item-text {
  // color: hsl(235, 19%, 35%);
  color: var(--todo-item-text);
  font-weight: 500;
  font-size: 16px;
}

.card,
.todo-list-item-label {
  width: 100%;
}

.all-todos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto auto;
  margin-top: -28px;
  border-radius: 5px;
}

.todo-theme-mode {
  background-image: var(--header-bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 24px;
}

.todo-list-item-label input::placeholder {
  color: hsl(236, 9%, 61%);
  font-weight: 500;
}

.todo-list-item-label {
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
}

@media screen and (max-width: 768px) {
  .all-todos {
    width: 90%;
  }
  .app-header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--bg-desktop-color);
    width: 100% !important;
  }
  .todo-input {
    width: 90% !important;
  }

  .cross {
    display: none !important;
  }

  .todo-list-item-label {
    width: 90% !important;
  }


}
</style>
