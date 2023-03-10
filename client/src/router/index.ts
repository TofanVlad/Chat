import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "chat",
    component: () => import("../views/Chat.vue"),
  },
  {
    path: "/Profile/:id",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
