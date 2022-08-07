import { createRouter, createWebHistory } from "vue-router";
import "normalize.css";

const routes = [];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
