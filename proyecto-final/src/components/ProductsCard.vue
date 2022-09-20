<template>
  <div class="">
    <div class="text-center">
      <h4>{{ product.name }}</h4>
      <img :src="product.portada" width="180" />
      <p>S/. {{ product.price }}</p>
      <button class="btn btn-success" @click="buy()">Comprar</button>
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
  },
  methods: {
    buy() {
      this.$emit("addToCarrito", this.$props.product);
    }
  }
};
</script>

<style scoped>
.products {
  height: auto;
}
img {
  height: 170px;
  width: 170px;
  object-fit: cover;
}
</style>
