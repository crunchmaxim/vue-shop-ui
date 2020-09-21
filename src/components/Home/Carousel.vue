<template>
  <div class='carousel-wrapper'>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <router-link to='discount'>
        <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/vue-shop-21bef.appspot.com/o/dicsount.jpg?alt=media&token=e4b554c9-7a34-46c7-ada5-eea5bb06d60f">
          <h1>Скидки и акции</h1>
        </b-carousel-slide>
      </router-link>

      <router-link to="adress">
        <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/vue-shop-21bef.appspot.com/o/map.jpg?alt=media&token=7fae32fd-cbdd-4bc4-ac06-4917b3dfc80c">
          <h1>Адреса магазинов</h1>
        </b-carousel-slide>
      </router-link>

      <router-link to="delivery">
        <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/vue-shop-21bef.appspot.com/o/delivery.jpg?alt=media&token=120a7537-bd88-44c7-bca9-b24a749662c6">
          <h1>Всё о доставке</h1>
        </b-carousel-slide>
      </router-link>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  },
};
</script>

<style lang='scss'>
  .carousel-wrapper {
    margin-top: 30px;
  }
</style>