<template>
  <div class="delivery">
    <div class="container">
      <h1>Страница с информацией о доставке</h1>
      <router-link
        to='/'
        class="products__link"
      >
        <b-icon
          icon="house-fill"
          variant="info"
        />Вернуться на главную
      </router-link>
      <b-row>
        <b-col
          cols=12
          md=6
        ><img
            class="delivery__img"
            src="https://firebasestorage.googleapis.com/v0/b/vue-shop-21bef.appspot.com/o/delivery.jpg?alt=media&token=120a7537-bd88-44c7-bca9-b24a749662c6"
          >
        </b-col>
        <b-col
          cols=12
          md=6
        >
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veritatis sit quidem, rerum neque est, fugiat sapiente consectetur laudantium, asperiores hic qui sequi facilis. Tempore nam dignissimos quod unde quam.
          Possimus quaerat qui blanditiis illum eligendi quam esse numquam dolorum cupiditate odio fugit error incidunt ab quia distinctio reprehenderit temporibus alias beatae impedit animi id dicta tenetur, nulla voluptatum! Aut!
          Eum, aliquid temporibus qui facilis quod nostrum sunt minus doloremque tenetur odit mollitia officiis natus voluptatem adipisci amet nemo laborum ab, debitis ducimus explicabo deserunt rerum. Quisquam illo sunt in.</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
};
</script>

<style lang="scss">
  .delivery {
    &__img {
      max-width: 100%;
    }
  }
</style>