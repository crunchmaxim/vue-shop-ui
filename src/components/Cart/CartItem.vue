<template>
  <div class="cartItem">
    <b-row>
      <b-col><img
          :src="imageUrl"
          class="cartItem__img"
        ></b-col>
      <b-col>
        <div class="cartItem__info">
          <div>Наименование: {{title}}</div>
          <div>Артикул: {{article}}</div>
        </div>
      </b-col>
      <b-col>Цена: {{price}} р.</b-col>
      <b-col>
        <div>Количество:</div>
        <div>
          <span class="cartItem__quantity" @click="decreaseQuantity">
            <b-icon icon="dash-circle" />
          </span>
          {{quantity}}
          <span class="cartItem__quantity" @click="increaseQuantity">
            <b-icon icon="plus-circle" />
          </span>
        </div>
      </b-col>
      <b-col>Итого: {{price*quantity}} р.</b-col>
      <b-col>Удалить</b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "CartItem",
  props: ["article", "id", "imageUrl", "price", "quantity", "title"],
  data() {
      return {
          productQuantity: 1
      }
  },
  methods: {
      ...mapMutations(["CHANGE_CART_PRODUCT_QUANTITY"]),
      decreaseQuantity() {
          this.CHANGE_CART_PRODUCT_QUANTITY({type: "decrease", id: this.id})
      },
      increaseQuantity() {
          this.CHANGE_CART_PRODUCT_QUANTITY({type: "increase", id: this.id})
      }
  }
};
</script>

<style lang="scss">
  .cartItem {
    &__img {
      max-width: 252px;
    }

    &__quantity {
        cursor: pointer;
    }

    .col {
      border: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>