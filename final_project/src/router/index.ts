import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../components/ProductList.vue";
import ProductDetails from "../components/ProductDetails.vue";
import NearestDonations from "../views/NearestDonations.vue";
import RegisterDonation from "../views/RegisterDonation.vue";
import EditDonation from "../views/EditDonation.vue";
import NotFound from "../views/NotFound.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "notFound",
    component: NotFound,
    meta: { requiresAdmin: false },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false },
    children: [
      {
        alias: "/",
        path: "/productsList",
        name: "productsList",
        component: ProductList,
        meta: { requiresAuth: false },
      },
      {
        path: "/productDetails/:id",
        name: "productDetails",
        props: true,
        component: ProductDetails,
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: "/nearestDonations",
    name: "nearestDonations",
    component: NearestDonations,
    meta: { requiresAuth: true },
  },
  {
    path: "/registerDonation",
    name: "registerDonation",
    component: RegisterDonation,
    meta: { requiresAuth: true },
  },
  {
    path: "/editDonation/:id",
    name: "editDonation",
    props: true,
    component: EditDonation,
    meta: { requiresAuth: true },
  },
  {
    path: "/userDonations",
    name: "userDonations",
    component: ProductList,
    meta: { requiresAuth: true },
  },
  {
    path: "/userLiked",
    name: "userLiked",
    component: ProductList,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
