import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VueForm from "vue-form";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//Add the specific component
Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(
  faUserSecret,
  faHouse,
  faBars,
  faUser,
  faUserPlus,
  faRightFromBracket
);

Vue.config.productionTip = false;

Vue.use(VueForm);
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
