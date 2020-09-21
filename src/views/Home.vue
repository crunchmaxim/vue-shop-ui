<template>
  <div class="home">
    <b-container>
      <div class="home__title">
        <img
          src="@/assets/logo.png"
          class="home__title-img"
        >
        <div class="home__title-text">Интерфейс интернет магазина на Vue JS. Добро пожаловать.</div>
      </div>
      <Carousel />
      <Categories/>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/Home/Carousel";
import Categories from "@/components/Home/Categories";

export default {
  name: "Home",
  components: {
    Carousel,
    Categories
  },
};
</script>

<style lang="scss">
  .home {
    &__title {
      display: flex;
    }

    &__title-text {
      font-size: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__title-img {
      width: 200px;
      height: 200px;
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .home {
      &__title {
        flex-direction: column;
      }

      &__title-text {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 575px) {
    .home {
      &__title-text {
        font-size: 25px;
      }

      &__title-img {
        width: 100px;
        height: 100px;
      }
    }
}
</style>
