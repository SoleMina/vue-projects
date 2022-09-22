<template>
  <div class="mb-5">
    <h3 class="text-center m-5">{{ title }}</h3>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="'user' + i">
          <td>#{{ i + 1 }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
export default {
  name: "TableComponent",
   props: {
    users: Array,
    title: String,
  },
  methods: {
  },
  computed: {}
};
</script>

<style scoped>
table {
  width: 450px;
  margin: 0 auto;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border: 1px solid;
  padding: 10px;
}
thead {
  background: #e0e0e0;
}
</style>
