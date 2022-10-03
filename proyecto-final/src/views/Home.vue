<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <div v-for="company in companies" :key="company.name">
      <h2 class="tienda-titulo mt-5 text-left">{{ company.name }}</h2>
      <div class="products__box pt-4" v-if="company.products">
        <ProductsCard
          v-for="product in company.products"
          :key="product.id + 'i'"
          :product="product"
          :carrito="carrito"
          @addToCart="addToCart($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductsCard from "../components/ProductsCard.vue";
export default {
  name: "HomeComponent",
  components: {
    ProductsCard
  },
  data() {
    return {
      title: "Flash Products",
      name: "",
      productsUrl: "https://63307baff5fda801f8e19f5c.mockapi.io/products",
      carrito: [],
      companies: [
        {
          name: "Pizzeria by Alfredo",
          products: []
        },
        {
          name: "Electronics",
          products: []
        }
      ],
      store: []
    };
  },
  computed: {},
  methods: {
    async getProducts() {
      await this.axios
        .get(this.productsUrl)
        .then((res) => (this.store = res.data))
        .catch((error) => console.log(error));
    },
    async postProducts() {
      let encabezado = {
        method: "POST",
        headers: {
          "Content-type": "applications/json"
        },
        body: JSON.stringify(this.store)
      };
      console.log(encabezado);
      await this.axios
        .post(this.productsUrl)
        .then((res) => this.store.push(res))
        .catch((error) => console.log(error));

      console.log(this.store);
    },
    addToCart(item) {
      //let item = this.carrito.find((i) => i.id == product.id);
      const isInCart = (id) => this.carrito.some((e) => e.product.id === id);
      console.log("ITEMMMM", isInCart(item.product.id));
      console.log("ID", item.product.id);
      console.log("PRRODUCT", item.product);
      if (isInCart(item.product.id)) {
        this.carrito.map((elem) => {
          console.log("elem.product.id", elem.product.id);
          console.log("item.product.id", elem.product.id);
          if (elem.product.id === item.product.id) {
            elem.quantity = elem.quantity + item.quantity;
          } else return elem;
        });
        console.log("MAAA", this.carrito);
      } else {
        this.carrito.push(item);
        console.log("MEEE", this.carrito);
      }
    }
  },
  created() {
    this.getProducts();
  },
  mounted() {
    let newProduct;
    setTimeout(() => {
      this.companies.forEach((element, index) => {
        console.log("elementooo", element);
        console.log("index", index);
        newProduct = this.store.filter(
          (product) => product.company === element.name
        );
        console.log("newProduct", newProduct);
        this.companies[index].products = newProduct;
      });
    }, 500);
  },
  updated() {}
};
</script>

<style scoped>
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
  color: #702733;
}
</style>
