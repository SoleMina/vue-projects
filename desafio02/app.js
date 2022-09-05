Vue.component("main-products", {
  props: {
    products: Object
  },
  template: `<div>
                <h3 class="center">{{products.titulo}}</h3>
                <img :src="products.portada" width="300" />
                <p class="center">Costo: {{products.costo}}</p>
            </div>`
});

var app = new Vue({
  el: "#app",
  data: {
    title: "Desafío 2",
    coderProducts: [
      {
        id: 1,
        titulo: "Iphone 11",
        costo: 575.0,
        portada: "https://falabella.scene7.com/is/image/FalabellaPE/18673441_1",
        oferta: true
      },
      {
        id: 2,
        titulo: "Samsung TV",
        costo: 675.0,
        portada:
          "https://falabella.scene7.com/is/image/FalabellaPE/18891312_01",
        oferta: false
      },
      {
        id: 3,
        titulo: "LG TV 55'",
        costo: 845.0,
        portada:
          "https://falabella.scene7.com/is/image/FalabellaPE/18946885_01",
        oferta: true
      },
      {
        id: 4,
        titulo: "Laptop Lenovo",
        costo: 845.0,
        portada:
          "https://falabella.scene7.com/is/image/FalabellaPE/882511912_1",
        oferta: true
      },
      {
        id: 5,
        titulo: "Batidora",
        costo: 845.0,
        portada: "https://falabella.scene7.com/is/image/FalabellaPE/17886849_1",
        oferta: false
      },
      {
        id: 6,
        titulo: "Pack Minime",
        costo: 845.0,
        portada: "https://falabella.scene7.com/is/image/FalabellaPE/18782863",
        oferta: false
      }
    ]
  },
  methods: {
    getColor(index) {
      return index % 2 ? "gris" : "blanco";
    }
  },
  computed: {}
});
