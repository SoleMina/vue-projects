<template>
  <div class="">
    <div class="text-center">
      <h4>{{ product.name }}</h4>
      <img :src="product.portada" width="180" />
      <p>S/. {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: {
    product: Object
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
  height: auto;
}
</style>
