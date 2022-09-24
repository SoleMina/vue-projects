import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./views/Home.vue";
import ContactComponent from "./views/ContactUs.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactComponent
    }
  ]
});
export default router;
