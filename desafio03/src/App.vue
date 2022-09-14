<template>
  <div id="app">
    <MainTitle :title="title" />
    <ProductsCard />
  </div>
</template>

<script>
import MainTitle from "./components/MainTitle.vue";
import ProductsCard from "./components/ProductsCard.vue";

export default {
  name: "App",
  components: {
    MainTitle,
    ProductsCard
  },
  data() {
    return {
      title: "Our Products"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  font-family: system-ui;
}
body {
  background-color: #ededed;
}
.center {
  text-align: center;
}
button {
  background-color: black;
  color: white;
  border: none;
  outline: none;
}
span,
button {
  font-size: 20px;
}
span {
  padding: 0 10px;
}
.green {
  color: green;
}
.red {
  color: red;
}
.gris {
  background: #ccc;
}
</style>
