<template>
  <div class="navbar-wrapper">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand>
        <router-link to="/"><img
            :src="require('../assets/logo.png')"
            class="logo"
          /> Vue Shop</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-icon icon="telephone-fill" />8-123-45-67-890
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Введите название товара"
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >Поиск</b-button>
          </b-nav-form>
          <b-nav-item>
            <router-link to="/cart">
              <b-icon icon="cart" />Корзина
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
  nav .navbar-nav li a {
    color: white !important;
  }

  li .form-inline {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li.form-inline {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 50px;
  }

  .navbar-wrapper {
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>