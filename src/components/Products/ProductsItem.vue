<template>
  <div class="product">
    <img
      :src="imageUrl"
      class="product__img"
      @click="toggleModal"
    >
    <div
      class="product__subtype"
      @click="toggleModal"
    >{{subtype}}</div>
    <div
      class="product__title"
      @click="toggleModal"
    >{{title}}</div>
    <div class="product__price">{{price}} р.</div>
    <b-button
      href="#"
      variant="info"
      @click="addToCart"
    >В корзину</b-button>

    <ProductsItemModal
      :title="title"
      :modal="modal"
      :imageUrl="imageUrl"
      :price="price"
      :article="article"
      :description="description"
      @toggleModal="toggleModal"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ProductsItemModal from "@/components/Products/ProductsItemModal";

export default {
  name: "Product",
  props: [
    "article",
    "id",
    "imageUrl",
    "price",
    "quantity",
    "subtype",
    "title",
    "description",
  ],
  data() {
    return {
      modal: false,
    };
  },
  components: {
    ProductsItemModal,
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    addToCart() {
      this.ADD_PRODUCT_TO_CART(this.id);
      this.makeToast()
    },
    toggleModal() {
      this.modal = !this.modal;
    },
    makeToast() {
      this.toastCount++;
      this.$bvToast.toast("Товар добавлен в корзину", {
        title: "Уведомление",
        autoHideDelay: 4000,
        appendToast: false,
        variant: "info",
        solid: true,
        toaster: "b-toaster-bottom-right"
      });
    },
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