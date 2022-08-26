var app = new Vue({
  el: "#app",
  data: {
    title: "Desafío contador",
    num: 0,
    sum: 1,
    bool: true
  },
  methods: {
    sumar() {
      this.num = this.num + this.sum;
      //this.num++
    },
    restar() {
      if (this.num > 0) {
        this.num = this.num - this.sum;
        //this.num--
      } else {
        alert("No se puede disminuir el monto");
      }
    }
  },
  computed: {
    text() {
      return `<span style="color:red;">Contador de prueba:</span>`;
    }
  }
});
