import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/Dashboard";
import Login from "@/components/Login";
import Register from "@/components/Register";

import Questions from "./questions";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/sign_up", component: Register },
  ...Questions
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
