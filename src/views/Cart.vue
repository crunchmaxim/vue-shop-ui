<template>
  <div class="cart">
    <b-container>
      <h1>Корзина</h1>

      <div class="cart__info">
        <div class="cart__sum">Всего товаров: {{sum.quantitySum}} шт. на сумму {{sum.pricesSum}} р.</div>
        <router-link
          to='/'
          class="cart__link"
        >
          <b-icon
            icon="house-fill"
            variant="info"
          />Вернуться на главную
        </router-link>
      </div>

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
    sum() {
      let pricesSum = 0;
      let quantitySum = 0;

      this.CART_PRODUCTS.forEach((product) => {
        pricesSum += product.price * product.quantity;
        quantitySum += product.quantity;
      });
      return { pricesSum, quantitySum };
    },
  },
};
</script>

<style lang="scss">
  .cart {
    min-height: 800px;
    height: 100%;
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__sum {
      text-align: left;
      font-size: 28px;
    }

    &__link {
      display: block;
      color: black;
      text-decoration: none;
      text-align: right;

      &:hover {
        color: black;
      }
    }
  }

  @media (max-width: 992px) {
    .cart {
      &__info {
        flex-direction: column;
      }

      &__link {
          width: 100%;
      }
    }
  }
</style>