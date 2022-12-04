import { createRouter, createWebHistory } from "vue-router";
import Active from "../views/ActiveTodo.vue";
import Completed from "../views/CompleteTodo.vue";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/completed",
      name: "Completed",
      component: Completed,
    },
    {
      path: "/active",
      name: "Active",
      component: Active,
    }
  ],
});

export default router;
