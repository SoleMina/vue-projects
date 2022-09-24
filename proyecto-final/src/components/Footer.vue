<template>
  <div class="footer p-3 mt-5 text-center">
    All copyrights reserved - {{ num }}
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    fullDate() {
      let fecha = new Date();
      let year = fecha.getFullYear();
      this.num = year;
    }
  },
  mounted() {
    this.fullDate();
  }
};
</script>

<style scoped>
.footer {
  background: #702733;
  color: white;
}
</style>
