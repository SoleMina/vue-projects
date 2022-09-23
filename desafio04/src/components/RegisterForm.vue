<template>
  <div class="m-0">
    <h2 class="text-center p-4">{{ title }}</h2>
    <vue-form :state="formState" @submit.prevent="onSubmit" ref="name">
      <validate class="fc" :custom="{ validator: firstnameValidator }">
        <label class="text-label">Firstname *</label>
        <input
          type="text"
          v-model="data.firstname"
          required
          name="firstname"
          class="form-control"
        />
        <field-messages class="mb-2">
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene que ser un firstname</div>
        </field-messages>
      </validate>
      <validate class="fc" :custom="{ validator: lastnameValidator }">
        <label class="text-label">Lastname*</label>
        <input
          type="text"
          v-model="data.lastname"
          required
          name="lastname"
          class="form-control"
        />
        <field-messages class="mb-2">
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene que ser un lastname</div>
        </field-messages>
      </validate>
      <validate class="fc" :custom="{ validator: emailValidator }">
        <label class="text-label">Email*</label>
        <input
          type="text"
          v-model="data.email"
          required
          name="email"
          class="form-control"
        />
        <field-messages class="mb-2">
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene que ser un email</div>
        </field-messages>
      </validate>
      <validate class="my-3" :custom="{ validator: passwordValidator }">
        <label class="text-label">Contraseña</label>
        <input
          type="password"
          v-model="data.password"
          required
          name="password"
          class="form-control"
        />
        <field-messages class="mb-2">
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">Este campo tiene mayor a 8 caracteres</div>
        </field-messages>
      </validate>
      <validate class="my-3" :custom="{ validator: samePasswordValidator }">
        <label class="text-label">Confirmar Contraseña</label>
        <input
          type="password"
          v-model="data.samePassword"
          required
          name="samePassword"
          class="form-control"
        />
        <field-messages class="mb-2">
          <div class="text-success">Correcto!</div>
          <div slot="required">Este campo es obligatorio</div>
          <div slot="validator">La contraseña no es la misma</div>
        </field-messages>
      </validate>
      <button type="submit" class="btn btn-primary w-100" @click="addUser()">
        Enviar
      </button>
    </vue-form>
  </div>
</template>

<script lang="js">
import {User} from "../user.js";
export default {
  name: "RegisterForm",
  props: {
    msg: String,
    users: Array
  },
  data() {
    return {
      title: "Register",
      formState: {},
      usuario: {},
      data: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        samePassword: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.formState.$invalid) {
        alert("ERROR EN EL FORMULARIO");
        return;
      }
      alert("FORMULARIO ENVIADO");
    },
    addUser() {
      if (this.formState.$invalid) {
        return;
      }
      console.log(this.users)
      this.usuario =  new User(this.data.firstname, this.data.lastname, this.data.email, this.data.password)
      this.$emit("addToUsers", this.usuario);

    },
    passwordValidator: function (value) {
      let res = true;
      if (value.length > 8 || value.length < 3) {
        res = false;
      }
      return res;
    },
    samePasswordValidator: function (value) {
      let res = true;
      console.log(this.data.password);
      if (!(value == this.data.password)) {
        res = false;
        console.log("ADENTRO", res);
      }
      console.log("AFUERA", res);
      return res;
    },
    emailValidator: function (value) {
      let res = false;
      if (value.includes("@") && value.includes(".com")) {
        res = true;
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
      }
      return res;
    },
    firstnameValidator: function (value) {
      let res = true;
      if (value.length < 2) {
        res = false;
      }
      return res;
    },
    lastnameValidator: function (value) {
      let res = true;
      if (value.length < 2) {
        res = false;
      }
      return res;
    }
  },
  computed() {
    console.log(this.users)
  }
};
</script>

<style scoped>
form {
  width: 400px;
  margin: 0 auto;
}
.text-label {
  font-weight: bold;
}
</style>
