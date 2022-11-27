<template>
  <main>
    <HomeComp />
    <!-- <router-view /> -->
  </main>
  <!-- <div></div> -->
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
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // overflow: hidden;
  // font-size: 19px;
  background: var(--bg-desktop-light);
  height: 100vh;
}

:root {
  // --checkbox-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  --bg-desktop-light: #f1f1f1;
  --checkbox-color: hsl(280, 87%, 65%);
  --checkbox-shadow: hsl(192, 100%, 67%);
}

// .todo-input {
//   width: 100%;
//   padding: 0 5px;
//   outline: none;
//   border: none;
//   border-bottom: 1px solid #272727;
//   background-color: transparent;
//   margin-right: 15px;
//   border-radius: 0px;
//   color: #272727;
//   box-shadow: none;
//   font-size: 1rem;
// }

// .todo-input::placeholder {
//   color: #272727;
// }

.todo-list-item {
  // background-color: rgba(255, 255, 255, 0.7);
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // margin-bottom: 12px;
  // padding: 8px;
  // position: relative;
  // border-radius: 35px;
}

.todo-list-item input {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid hsl(236, 33%, 92%);
  border-radius: 50%;
  // background-image: url("data:image/svg+xml;utf8<svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'><path fill='none' stroke='#FFF' stroke-width='2' d='M1 4.304L3.696 7l6-6'/></svg>");
  // background-image: url("./assets/check.png");
  background-image: url("./assets/images/ICON-CHECK.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0px;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.todo-list-item input:hover {
  border-color: var(--checkbox-color);
  // box-shadow: 0 0 0 3px var(--checkbox-shadow);
  background-size: 10px;
}

.todo-list-item input:checked {
  // box-shadow: 0 0 0 3px var(--checkbox-shadow);
  background-size: 18px;
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
  color: hsl(235, 19%, 35%);
  font-size: 16px;
}




.card, .todo-list-item-label{
  width: 100%;
}
</style>
