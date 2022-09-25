<template>
  <div id="app">
    <div class="d-flex">
      <div class="navbar pt-0">
        <NavBar />
      </div>
      <div class="products pt-5">
        <router-link to="/contact">Link to Contact</router-link>
        <router-view></router-view>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent
  },
  data() {
    return {
      title: "Flash Products",
      isLogged: true
    };
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
