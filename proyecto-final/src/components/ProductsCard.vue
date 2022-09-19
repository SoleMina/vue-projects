<template>
  <div class="products">
    <h1 class="text-center">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: {
    msg: String
  },
  data() {
    return {
      title: "Products"
    };
  }
};
</script>

<style scoped>
.products {
  height: 100vh;
}
</style>
