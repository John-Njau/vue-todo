import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/TodoComp.vue";
import ActiveTodo from "@/components/ActiveTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/active",
      name: "ActiveTodo",
      component: ActiveTodo,
    },
    {
      path: "/completed",
      name: "CompletedTodo",
      component: CompletedTodo,
    },
  ],
});

export default router;
