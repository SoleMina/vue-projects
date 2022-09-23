<template>
  <div>
    <button
      v-if="count <= 0"
      class="btn w-100 btn-success"
      @click="increment()"
    >
      COMPRAR <span class="fa-solid fa-cart-plus"></span>
    </button>
    <div v-else class="d-flex justify-content-between align-items-center">
      <button class="btn w-25 btn-success" @click="decrement()">
        <span class="fa-solid fa-minus">-</span>
      </button>
      <span>{{ count }}</span>
      <button class="btn w-25 btn-success" @click="increment()">
        <span class="fa-solid fa-plus">+</span>
      </button>
    </div>
    <div v-if="count > 0" class="mt-2">
      <button class="btn w-100 btn-success" @click="addToCart(count)">
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
    return {
      count: 0
    };
  },
  computed: {
    /*
    count() {
      let item = this.carrito.find((i) => i.product.id == this.product.id);
      return item ? item.count : 0;
	}
	*/
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToCart(count) {
      console.log("CART", this.carrito);
      this.$emit("addToCart", { product: this.product, quantity: count });
    }
  }
};
</script>

<style scoped></style>
