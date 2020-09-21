<template>
  <div class="footer">
    <div class="container">
      <hr>
      © 2020 <img
        :src="require('../assets/logo.png')"
        class="footer__logo"
      >Vue Shop
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
  .footer {
    margin: 20px 0;
    &__logo {
      width: 30px;
      height: 30px;
    }
  }
</style>