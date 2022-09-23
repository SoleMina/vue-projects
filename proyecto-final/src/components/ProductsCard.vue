<template>
  <div class="">
    <div class="text-center">
      <h4>{{ product.name }}</h4>
      <img :src="product.portada" width="180" />
      <p>S/. {{ product.price }}</p>
      <ShopButton
        :product="product"
        :carrito="carrito"
        @addToCart="$emit('addToCart', $event)"
      />
    </div>
  </div>
</template>

<script>
import ShopButton from "./ShopButton.vue";
export default {
  components: { ShopButton },
  name: "ProductsCard",
  props: {
    product: Object,
    carrito: Array
  },
  data() {
    return {
      title: "Products"
    };
  },
  methods: {}
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
