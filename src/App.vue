<template>
  <main>
    <router-view />
  </main>
</template>

<script>

export default {
  name: "App",
  components: {
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
    .todo-card,
    .nav-page {
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
    .complete-active {
      color: var(--todo-item-text);
    }
  }
}

* {
  margin: 0 0 0 0;
  // padding: 0 0 0 0;
}

#app {
  font-family: "Josefin Sans", sans-serif;
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

.todo-list{
  list-style: none;
  // border: 1px solid red;
  margin: 12px;
  padding: 4px;
  // border-bottom: 2px solid red;
}

.todo-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 10px 0;
  // border-bottom: 1px solid var(--todo-bottom-border);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    // background-color: hsl(233, 11%, 84%);
    .delete-todo {
      display: block;
    }
  }
}

.todo-checkbox {
  width: 1.5rem;
  height: 1.5rem;
  border: var(--todo-checkbox);
  border-radius: 50%;
  background-image: url("./assets/images/ICON-CHECK.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0px;
  transition: 0.2s;
  flex-shrink: 0;
  // margin: 0px 18px 14px 0;
  appearance: none;
  cursor: pointer;
  margin-right: 0.5rem;
}

.todo-checkbox:hover {
  border-color: var(--checkmark-color);
}

.hr {
  /* border: 1px solid hsl(235, 19%, 35%); */
  border: 1px solid var(--todo-bottom-border);
  // margin: 10px 0;
}

.todo-checkbox:checked {
  // box-shadow: 0 0 0 3px var(--checkmark-shadow);
  background-size: 10px;
  // border: 1px solid var(--checkmark-color);
  // background-color: var(--checkmark-color);
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-size: cover;
}


.todo-checkbox:checked + span {
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

.todo-label {
  width: 100%;
}

.nav-page {
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  // margin: auto auto;
  margin: 0 auto;
  cursor: pointer;
  font-family: sans-serif;
  font-size: smaller;
  color: hsl(233, 10%, 64%);
  border-radius: 5px;
  padding: 10px 11px;
  a {
    &:hover {
      color: hsl(233, 10%, 64%);
    }
  }
}

.todo-card {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // border-bottom: 1px solid var(--todo-bottom-border);
  padding: 12px;
  width: 50%;
  margin: auto auto;
  margin-top: -28px;
  border-radius: 5px;
}

.todo-list li{
  border-bottom: 1px solid var(--todo-bottom-border);
  // padding: 10px 0;
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

.todo-status {
  display: flex;
  justify-content: space-between;
  // margin-top: auto;
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

.todo-details {
  padding: 10px 10px;
  a {
    &:hover {
      color: hsl(233, 10%, 64%);
    }
  }
}

.theme-mode {
  background-image: var(--top-background-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 44px;
}

.todo-input input {
  border: none;
  outline: none;
  background-color: transparent;
  height: 40px;
  color: var(--todo-input);
  font-family: "Josefin Sans", sans-serif;
  margin: auto auto;
}

.title-theme{
  // font-size: 1.5rem;
  margin: auto;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .todo-card,
  .nav-page {
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

.complete-active {
  display: flex;
  justify-content: center;
  margin: 32px;
}


</style>
