<template>
  <div class="navbar d-flex flex-column justify-content-start">
    <div class="icon__menu pb-5 pt-3">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <ul>
      <li>
        <a class="icon__link">
          <font-awesome-icon icon="fa-solid fa-house" />
        </a>
      </li>
      <li>
        <a class="icon__link">
          <font-awesome-icon icon="fa-solid fa-user" />
        </a>
      </li>
      <li>
        <a class="icon__link">
          <font-awesome-icon icon="fa-solid fa-user-plus" />
        </a>
      </li>
      <li>
        <a class="icon__link">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
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
  }
};
</script>

<style scoped>
.navbar {
  background: pink;
  height: 100vh;
  position: fixed;
  top: 0;
}
.navbar > ul {
  padding-top: 10px;
  padding-left: 0;
}
.navbar > ul > li {
  list-style-type: none;
  padding: 20px 10px;
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
</style>
