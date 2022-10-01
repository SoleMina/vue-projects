import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../views/Home.vue";
import ContactComponent from "../views/ContactUs.vue";
//import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactComponent
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm
    }
    /*
    {
      path: "/login",
      name: "login",
      component: LoginForm
    },
    */
  ]
});
export default router;
