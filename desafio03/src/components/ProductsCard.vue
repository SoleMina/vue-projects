<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>Imagen</td>
          <td>Nombre</td>
          <td>Oferta</td>
          <td>Precio</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in coderProducts"
          :key="'item' + i"
          :class="getColor(i)"
        >
          <div>
            <td>#{{ i + 1 }}</td>
            <td>
              <img :src="item.portada" width="100" />
            </td>
            <td>{{ item.titulo }}</td>
            <td :class="item.oferta ? 'green' : 'red'">
              {{ item.oferta ? "SI" : "NO" }}
            </td>
            <td>${{ item.costo }}</td>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      coderProducts: [
        {
          id: 1,
          titulo: "Iphone 11",
          costo: 575.0,
          portada:
            "https://falabella.scene7.com/is/image/FalabellaPE/18673441_1",
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
          portada:
            "https://falabella.scene7.com/is/image/FalabellaPE/17886849_1",
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
    };
  },
  methods: {
    getColor(index) {
      return index % 2 ? "gris" : "blanco";
    }
  },
  computed: {}
};
</script>

<style scoped></style>
