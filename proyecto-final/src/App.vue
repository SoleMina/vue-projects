<template>
  <div id="app">
    <div v-if="isLogged">
      <div class="d-flex">
        <div class="navbar pt-0">
          <NavBar />
        </div>
        <div class="products pt-5">
          <!--router-link to="/contact">Link to Contact</router-link>-->
          <router-view></router-view>
        </div>
      </div>
      <FooterComponent />
    </div>
    <div v-else>
      <LoginForm @loginEvent="loginEvent($event)" />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
    LoginForm
  },
  data() {
    return {
      title: "Flash Products",
      isLogged: false
    };
  },
  methods: {
    login() {
      this.isLogged = !this.isLogged;
    },
    loginEvent(data) {
      console.log("OHHH", data);
      this.isLogged = data.isLogged;
    }
  },
  computed: {},
  mounted() {
    this.isLogged;
  },
  updated() {
    this.isLogged;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.navbar {
  min-width: 10%;
}
.products {
  width: 90%;
  min-height: 86vh;
}
</style>
