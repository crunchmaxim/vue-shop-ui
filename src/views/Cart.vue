<template>
  <div>
    <b-container>
      <h1>Корзина</h1>
      <CartItem
        v-for="product in CART_PRODUCTS"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :article="product.article"
        :quantity="product.quantity"
        :imageUrl="product.imageUrl"
        :price="product.price"
      />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/Cart/CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["CART_PRODUCTS"]),
  },
};
</script>

<style>
</style>