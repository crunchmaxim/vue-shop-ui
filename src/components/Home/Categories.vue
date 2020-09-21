<template>
  <div class="categories">
    <h1>Категории товаров</h1>
    <b-row>
      <b-col
        cols=6
        sm=6
        md=3
      >
        <router-link to="/products/guitar">
          <b-card
            img-src="@/assets/images/guitar.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              <div class="categories-text">
                Гитары
              </div>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
      <b-col
        cols=6
        sm=6
        md=3
      >
        <router-link to="/products/bass">
          <b-card
            img-src="@/assets/images/bass.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              <div class="categories-text">
                Бас-гитары
              </div>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
      <b-col
        cols=6
        sm=6
        md=3
      >
        <router-link to="/products/drums">
          <b-card
            img-src="@/assets/images/drums.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              <div class="categories-text">
                Ударные
              </div>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
      <b-col
        cols=6
        sm=6
        md=3
      >
        <router-link to="/products/piano">
          <b-card
            img-src="@/assets/images/piano.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              <div class="categories-text">
                Клавишные
              </div>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style lang="scss">
  .categories {
    margin-top: 50px;
    margin-bottom: 100px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  .categories-text {
    font-size: 24px;
  }

  .card {
    margin-bottom: 20px;
  }

  @media (max-width: 992px) {
    .categories-text {
      font-size: 19px;
    }
  }

  @media (max-width: 575px) {
    .categories-text {
      font-size: 16px;
    }
  }
</style>