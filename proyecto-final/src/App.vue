<template>
  <div id="app" class="d-flex">
    <div class="navbar pt-0">
      <NavBar />
    </div>
    <div class="products pt-5">
      <router-link to="/contact">Link to Contact</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
//import LoginForm from "./components/LoginForm.vue";
//import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "App",
  components: {
    NavBar
    //LoginForm,
    //RegisterForm
  },
  data() {
    return {
      title: "Flash Products",
      name: ""
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
}
.navbar {
  min-width: 10%;
}
.products {
  width: 90%;
}
.products__box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tienda-titulo {
  padding: 10px 20px;
  background-color: #efabb6;
}
</style>
