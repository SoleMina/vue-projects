<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <RegisterForm :users="users" @addToUsers="addToUsers($event)" />
    <TableComponent :users="users" :title="title" />
  </div>
</template>

<script lang="js">
import RegisterForm from "./components/RegisterForm.vue";
import TableComponent from "./components/Table.vue";

export default {
  name: "App",
  components: {
    RegisterForm,
    TableComponent,
  },
  data() {
    return(
      {
        title: "Registro de Uusuarios",
        users: [
        {
          firstname: "karina",
          lastname: "prado",
          email: "kprado@gmail.com",
          password: 1234,
        },
      ]
      }
    )
  },
  methods: {
    addToUsers(user) {
      this.users.push(user);
      console.log("USERS", this.users)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
img {
  margin: 0 auto;
  width: 100px;
  display: block;
}
</style>
