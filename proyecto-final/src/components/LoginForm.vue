<template>
  <div class="m-0">
    <h1 class="text-center p-5">{{ title }}</h1>
    <vue-form :state="formState" @submit.prevent="onSubmit">
      <validate class="fc" :custom="{ validator: nameValidator }">
        <span>Email *</span>
        <input
          type="text"
          v-model="data.email"
          required
          name="email"
          class="form-control"
        />
        <field-messages>
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene que ser un email</div>
        </field-messages>
      </validate>
      <validate class="my-3" :custom="{ validator: passwordValidator }">
        <label>Contraseña</label>
        <input
          type="text"
          v-model="data.password"
          required
          name="password"
          class="form-control"
        />
        <field-messages>
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene mayor a 8 caracteres</div>
        </field-messages>
      </validate>
      <button
        type="submit"
        class="btn btn-primary w-100"
        @click="loginEvent(data)"
      >
        Enviar
      </button>
    </vue-form>
    <div class="d-flex justify-content-center flex-column form__register">
      <p class="pt-5">¿Aún no tienes una cuenta?</p>
      <router-link to="/register" class="btn btn-secondary"
        >Crear cuenta</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    msg: String
  },
  data() {
    return {
      title: "Login",
      formState: {},
      usersURL: "https://6335d43565d1e8ef2663f337.mockapi.io/users",
      users: [],
      user: [],
      isLogged: false,
      data: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      await this.getUsers();
      if (this.formState.$invalid) {
        alert("ERROR EN EL FORMULARIO");
        return;
      }
      this.user = this.users.filter(
        (user) =>
          user.email === this.data.email && user.password === this.data.password
      );
      console.log("usuario", this.user);
      if (this.user[0].email == undefined) {
        alert("ERROR EN EL FORMULARIO");
        return;
      } else {
        this.isLogged = true;
        alert("USUARIO LOGEADO");
      }
    },
    async getUsers() {
      await this.axios
        .get(this.usersURL)
        .then((res) => (this.users = res.data))
        .catch((error) => console.log(error));
      console.log("users", this.users);
    },
    passwordValidator: function (value) {
      let res = true;
      if (value.length > 8) {
        res = false;
      }
      return res;
    },
    nameValidator: function (value) {
      let res = true;
      if (!value.includes("@")) {
        res = false;
      }
      if (!value.includes(".com")) {
        res = false;
      }
      return res;
    },
    loginEvent(data) {
      setTimeout(() => {
        if (this.isLogged) {
          this.$emit("loginEvent", {
            email: data.email,
            password: data.password,
            isLogged: this.isLogged
          });
        }
      }, 1000);
    },
    created() {
      this.getUsers();
    },
    mounted() {}
  }
};
</script>

<style scoped>
form,
.form__register {
  width: 400px;
  margin: 0 auto;
}
.form__register > .btn {
  width: fit-content;
}
</style>
