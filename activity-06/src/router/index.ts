import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import UserRegister from "../views/UserRegister.vue";
import HomeForm from "../components/HomeForm.vue";
import UserDescription from "../components/UserDescription.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        {
          path: "/home",
          name: "home",
          component: HomeForm,
        },
        {
          path: "/profile",
          name: "profile",
          component: UserDescription,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
    {
      path: "/userRegister",
      name: "userRegister",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserRegister,
    },
  ],
});

export default router;
