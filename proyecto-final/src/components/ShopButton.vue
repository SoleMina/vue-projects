<template>
  <div>
    <button
      v-if="count <= 0"
      class="btn w-100 btn-success"
      @click="addToCart(1)"
    >
      COMPRAR <span class="fa-solid fa-cart-plus"></span>
    </button>
    <div v-else class="d-flex justify-content-between align-items-center">
      <button class="btn w-25 btn-success" @click="addToCart(-1)">
        <span class="fa-solid fa-minus">-</span>
      </button>
      <span>{{ count }}</span>
      <button class="btn w-25 btn-success" @click="addToCart(1)">
        <span class="fa-solid fa-plus">+</span>
      </button>
    </div>
    <div v-if="count > 0" class="mt-2">
      <button class="btn w-100 btn-success" @click="addProduct()">
        Añadir a carrito <span class="fa-solid fa-cart-plus"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopButton",
  props: { product: Object, carrito: Array },
  data() {
    return {};
  },
  computed: {
    count() {
      let item = this.carrito.find((i) => i.product.id == this.product.id);
      return item ? item.count : 0;
    }
  },
  methods: {
    addToCart(count) {
      this.$emit("addToCart", { product: this.product, sum: count });
    },
    addProduct() {
      this.$emit("addProduct", this.product);
      console.log(this.product);
    }
  }
};
</script>

<style scoped></style>
