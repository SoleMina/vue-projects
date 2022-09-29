<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <div v-for="company in companies" :key="company.name">
      <h2 class="tienda-titulo mt-5 text-left">{{ company.name }}</h2>
      <div class="products__box" v-if="company.products">
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
      url: "https://63307baff5fda801f8e19f5c.mockapi.io/products",
      carrito: [],
      companies: [
        {
          name: "Pizzeria by Alfredo",
          products: []
        },
        {
          name: "Electronics",
          products: []
        },
        {
          name: "Lenovo",
          products: []
        }
      ],
      store: [],
      tiendas: [
        {
          id: 1,
          name: "Pizzeria",
          products: [
            {
              id: 1,
              name: "La Marinara",
              price: 575.0,
              portada:
                "https://www.paulinacocina.net/wp-content/uploads/2017/04/2-640x427.jpg",
              oferta: true
            },
            {
              id: 2,
              name: "La Fugaza",
              price: 675.0,
              portada:
                "https://www.paulinacocina.net/wp-content/uploads/2017/04/3-640x480.jpg",
              oferta: false
            },
            {
              id: 3,
              name: "La Hawaiana",
              price: 845.0,
              portada:
                "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg",
              oferta: true
            },
            {
              id: 4,
              name: "A La Española",
              price: 845.0,
              portada:
                "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg?width=1200&enable=upscale",
              oferta: true
            },
            {
              id: 5,
              name: "Margarita",
              price: 845.0,
              portada:
                "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4220/thumb/r_4220_1550829924.jpg",
              oferta: false
            },
            {
              id: 6,
              name: "Peperoni",
              price: 845.0,
              portada:
                "https://media-cdn.tripadvisor.com/media/photo-p/15/2d/23/07/domino-s-pizza.jpg",
              oferta: false
            }
          ]
        },
        {
          id: 2,
          name: "Lenovo",
          products: [
            {
              id: 7,
              name: "Iphone 11",
              price: 575.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18673441_1",
              oferta: true
            },
            {
              id: 8,
              name: "Samsung TV",
              price: 675.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18891312_01",
              oferta: false
            },
            {
              id: 9,
              name: "LG TV 55'",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/18946885_01",
              oferta: true
            },
            {
              id: 10,
              name: "Laptop Lenovo",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/882511912_1",
              oferta: true
            },
            {
              id: 11,
              name: "Batidora",
              price: 845.0,
              portada:
                "https://falabella.scene7.com/is/image/FalabellaPE/17886849_1",
              oferta: false
            },
            {
              id: 12,
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
  computed: {},
  methods: {
    getData() {
      const getProducts = () => {
        this.axios
          .get(this.url)
          .then((res) => (this.store = res.data))
          .catch((error) => console.log(error));
      };
      getProducts();
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
    this.getData();
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
      //console.log("COMPANIESSS", this.companies);
      //console.log("STOREEEEE", this.store);
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
