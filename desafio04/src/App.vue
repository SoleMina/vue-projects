<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "App",
  components: {
    RegisterForm
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
img {
  margin: 0 auto;
  width: 100px;
  display: block;
}
</style>
