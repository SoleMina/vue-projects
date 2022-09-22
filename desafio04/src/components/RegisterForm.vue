<template>
  <div class="m-0">
    <h1 class="text-center p-4">{{ title }}</h1>
    <vue-form :state="formState" @submit.prevent="onSubmit">
      <validate class="fc" :custom="{ validator: firstnameValidator }">
        <span>Firstname *</span>
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
        <span>Lastname *</span>
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
        <span>Email *</span>
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
        <label>Contraseña</label>
        <input
          type="text"
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
      <button type="submit" class="btn btn-primary w-100">Enviar</button>
    </vue-form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  props: {
    msg: String
  },
  data() {
    return {
      title: "Register",
      formState: {},
      data: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
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
    passwordValidator: function (value) {
      let res = true;
      if (value.length > 8) {
        res = false;
      }
      return res;
    },
    emailValidator: function (value) {
      let res = false;
      if (value.includes("@") && value.includes(".com")) {
        res = true;
      }
      return res;
      /*
      let res = true;
      if (!value.includes("@")) {
        res = false;
      }
      if (!value.includes(".com")) {
        res = false;
      }
      return res;
      */
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
  }
};
</script>

<style scoped>
form {
  width: 400px;
  margin: 0 auto;
}
</style>
