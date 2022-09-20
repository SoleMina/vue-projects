<template>
  <div id="app" class="d-flex">
    <!--<img alt="Vue logo" src="./assets/logo.png" />-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="navbar pt-0">
      <NavBar />
    </div>
    <div class="products pt-5">
      <h1 class="text-center">{{ title }}</h1>
      <div v-for="tienda in tiendas" :key="tienda.id">
        <h2 class="tienda-titulo mt-5 text-left">{{ tienda.name }}</h2>
        <div class="products__box">
          <ProductsCard
            v-for="product in tienda.products"
            :key="product.id"
            :product="product"
            @addToCarrito="addToCarrito($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ProductsCard from "./components/ProductsCard.vue";
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    //HelloWorld,
    NavBar,
    ProductsCard
  },
  data() {
    return {
      title: "Flash Products",
      carrito: [],
      tiendas: [
        {
          id: 1,
          name: "Pizzeria by Alfredo",
          products: [
            {
              id: 1,
              name: "Iphone 11",
              price: 575.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18673441_1",
              oferta: true
            },
            {
              id: 2,
              name: "Samsung TV",
              price: 675.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18891312_01",
              oferta: false
            },
            {
              id: 3,
              name: "LG TV 55'",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18946885_01",
              oferta: true
            },
            {
              id: 4,
              name: "Laptop Lenovo",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/882511912_1",
              oferta: true
            },
            {
              id: 5,
              name: "Batidora",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/17886849_1",
              oferta: false
            },
            {
              id: 6,
              name: "Pack Minime",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18782863",
              oferta: false
            }
          ]
        },
        {
          id: 2,
          name: "Tortaza",
          products: [
            {
              id: 1,
              name: "Iphone 11",
              price: 575.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18673441_1",
              oferta: true
            },
            {
              id: 2,
              name: "Samsung TV",
              price: 675.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18891312_01",
              oferta: false
            },
            {
              id: 3,
              name: "LG TV 55'",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18946885_01",
              oferta: true
            },
            {
              id: 4,
              name: "Laptop Lenovo",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/882511912_1",
              oferta: true
            },
            {
              id: 5,
              name: "Batidora",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/17886849_1",
              oferta: false
            },
            {
              id: 6,
              name: "Pack Minime",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18782863",
              oferta: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    addToCarrito(product) {
      this.carrito.push(product);
    }
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
</style>
