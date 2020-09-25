<template>
  <div class="cartItem">
    <b-row>
      <b-col><img
          :src="imageUrl"
          class="cartItem__img"
        ></b-col>
      <b-col>
        <div>
          <div>
            <div class="cartItem__title">Наименование:</div>
            <div>{{title}}</div>
          </div>
          <div class="cartItem__article">
            <div class="cartItem__title">Артикул:</div>
            <div>{{article}}</div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="cartItem__title">Цена:</div>
        <div>{{price}} р.</div>
      </b-col>
      <b-col>
        <div>
          <div class="cartItem__title">Количество:</div>
        </div>
        <div>
          <span
            class="cartItem__quantity"
            @click="decreaseQuantity"
          >
            <b-icon icon="dash-circle" />
          </span>
          {{quantity}}
          <span
            class="cartItem__quantity"
            @click="increaseQuantity"
          >
            <b-icon icon="plus-circle" />
          </span>
        </div>
      </b-col>
      <b-col>
        <div class="cartItem__title">Итого:</div>
        <div>{{price*quantity}} р.</div>
      </b-col>
      <b-col class="cartItem__delete">
        <b-button
          variant="info"
          class="cartItem__delete-btn"
          @click="deleteProduct"
        >Удалить
          <b-icon icon="trash" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CartItem",
  props: ["article", "id", "imageUrl", "price", "quantity", "title"],
  data() {
    return {
      productQuantity: 1,
    };
  },
  methods: {
    ...mapMutations([
      "CHANGE_CART_PRODUCT_QUANTITY",
      "DELETE_PRODUCT_FROM_CART",
    ]),
    decreaseQuantity() {
      this.CHANGE_CART_PRODUCT_QUANTITY({ type: "decrease", id: this.id });
    },
    increaseQuantity() {
      this.CHANGE_CART_PRODUCT_QUANTITY({ type: "increase", id: this.id });
    },
    deleteProduct() {
      this.DELETE_PRODUCT_FROM_CART(this.id);
    },
  },
};
</script>

<style lang="scss">
  .cartItem {
    margin-bottom: 20px;

    &__img {
      max-width: 252px;
    }

    &__title {
      font-weight: 500;
    }

    &__article {
      margin-top: 20px;
    }

    &__quantity {
      cursor: pointer;
    }

    &__delete {
      span {
        cursor: pointer;
      }
    }

    &__delete-btn {
      margin: 10px 0;
    }

    .col {
      border: 1px solid gray !important;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .row {
      margin: 0px -2px;
    }
  }
</style>