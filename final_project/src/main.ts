import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import VueGeolocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";
import { userStore } from "./stores/user";
import { useRouter } from "vue2-helpers/vue-router";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.use(Toast, {
  position: "bottom-right",
  timeout: 3010,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__bounce",
  maxToasts: 4,
  newestOnTop: true,
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
  },
});

new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta?.requiresAuth && !localStorage.getItem("zFJqsz757BscGHsg")) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (record.meta.requiresAuth) {
    next({ name: "login" });
    // } else {
    //   next(); // go to wherever I'm going
    // }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

// router.beforeEach((to) => {
//   const store = userStore();
//   const routerManage = useRouter();
//   console.log(to.meta?.requiresAuth);

//   if (to.meta?.requiresAuth) {
//     console.log("precisa");
//     return router.push({ name: "login" });
//   }
// });
