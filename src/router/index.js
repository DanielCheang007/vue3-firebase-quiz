import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/Dashboard";
import Login from "@/components/Login";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
