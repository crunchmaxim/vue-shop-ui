<template>
  <div class="product">
    <img
      :src="imageUrl"
      class="product__img"
    >
    <div class="product__subtype">{{subtype}}</div>
    <div class="product__title">{{title}}</div>
    <div class="product__price">{{price}} р.</div>
    <b-button
      href="#"
      variant="info"
      @click="addToCart"
    >В корзину</b-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Product",
  props: ["article", "id", "imageUrl", "price", "quantity", "subtype", "title"],
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    addToCart() {
      this.ADD_PRODUCT_TO_CART(this.id)
      alert('Added to cart')
    }
  }
};
</script>

<style lang="scss">
  .product {
    margin: 4px;
    padding: 5px;
    width: 32%;
    height: 100%;
    border: 1px solid gray;
    border-collapse: collapse;

    &__img {
      width: 100%;
    }

    &__title {
        height: 50px;
    }

    &__price {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    .product {
      width: 48%;
    }
}

@media (max-width: 575px) {
    .product {
      width: 100%;
    }
}
</style>