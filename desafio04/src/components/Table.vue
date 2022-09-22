<template>
  <div>
    <h3 class="text-center m-5">{{ msg }}</h3>
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
  data() {
    return {
      msg: "Registro de Usuarios"
    };
  },
  methods: {
  },
  computed: {}
};
</script>

<style scoped>
table {
  width: 500px;
  margin: 0 auto;
}
</style>
