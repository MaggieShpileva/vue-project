import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
