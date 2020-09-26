<template>
  <div class="adress">
    <div class="container">
      <h1>Страница с адресами магазинов: </h1>
      <router-link
        to='/'
        class="products__link"
      >
        <b-icon
          icon="house-fill"
          variant="info"
        />Вернуться на главную
      </router-link>
      <div class="adress__info">1. Адрес 1</div>
      <div class="adress__info">2. Адрес 2</div>
      <div class="adress__info">3. Адрес 3</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2279.306619773617!2d61.38799205619989!3d55.16041147925237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c592b69980fa55%3A0x16567680aec78ae9!2z0L_RgC4g0JvQtdC90LjQvdCwLCA2NNCULCDQp9C10LvRj9Cx0LjQvdGB0LosINCn0LXQu9GP0LHQuNC90YHQutCw0Y8g0L7QsdC7LiwgNDU0MDgw!5e0!3m2!1sru!2sru!4v1601116389802!5m2!1sru!2sru"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adress",
};
</script>

<style lang="scss">
  .adress {
    &__info {
      font-size: 20px;
      text-align: left;
    }
  }
</style>