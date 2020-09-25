<template>
  <div class="product">
    <img
      :src="imageUrl"
      class="product__img"
      @click="toggleModal"
    >

    <ProductsItemModal
      :title="title"
      :modal="modal"
      :imageUrl="imageUrl"
      :price="price"
      :article="article"
      :id="id"
      @toggleModal="toggleModal"
      @addToCart="addToCart"
    />

    <div class="product__subtype" @click="toggleModal">{{subtype}}</div>
    <div class="product__title" @click="toggleModal">{{title}}</div>
    <div class="product__price">{{price}} р.</div>
    <b-button
      href="#"
      variant="info"
      @click="addToCart"
    >В корзину</b-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ProductsItemModal from "@/components/Products/ProductsItemModal";

export default {
  name: "Product",
  props: ["article", "id", "imageUrl", "price", "quantity", "subtype", "title"],
  data() {
    return {
      modal: false
    }
  },
  components: {
    ProductsItemModal,
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    addToCart() {
      this.ADD_PRODUCT_TO_CART(this.id);
      alert("Added to cart");
    },
    toggleModal() {
      this.modal = !this.modal
    }
  },
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
      cursor: pointer;
    }

    &__subtype {
      font-weight: 500;
      cursor: pointer;
    }

    &__title {
      height: 75px;
      cursor: pointer;
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