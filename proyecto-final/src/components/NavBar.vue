<template>
  <div class="navbar d-flex flex-column justify-content-start">
    <div class="icon__menu pb-5 pt-3">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <a class="icon__link">
          <font-awesome-icon :icon="icon.name" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  data() {
    return {
      icons: [
        {
          id: 0,
          name: "fa-solid fa-house"
        },
        {
          id: 1,
          name: "fa-solid fa-user"
        },
        {
          id: 2,
          name: "fa-solid fa-user-plus"
        },
        {
          id: 3,
          name: "fa-solid fa-right-from-bracket"
        }
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  background: #b94e60;
  height: 100vh;
  position: fixed;
  top: 0;
}
.navbar > ul {
  padding-top: 10px;
  padding-left: 0;
  width: 100%;
  text-align: center;
}
.navbar > ul > li {
  list-style-type: none;
  padding: 20px 10px;
}
.navbar > ul > li:hover {
  background: #efabb6 !important;
}
.navbar > ul > li > .icon__link {
  padding: 0 30px;
}
.navbar > ul > li:hover {
  background: cornflowerblue;
}
.navbar > ul > li > svg {
  text-align: center;
  margin: 0 auto;
}
.svg-inline--fa {
  color: white;
}
</style>
