<template>
  <div class="cartItem">
    <b-row>
      <b-col><img
          :src="imageUrl"
          class="cartItem__img"
        ></b-col>
      <b-col>
        <div>
          <div> Наименование: {{title}}</div>
          <div>Артикул: {{article}}</div>
        </div>
      </b-col>
      <b-col>Цена: <span>{{price}} р.</span> </b-col>
      <b-col>
        <div>Количество:</div>
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
      <b-col>Итого: <span>{{price*quantity}} р.</span></b-col>
      <b-col class="cartItem__delete">
        <b-button variant="info" class="cartItem__delete-btn" @click="deleteProduct">Удалить
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
    ...mapMutations(["CHANGE_CART_PRODUCT_QUANTITY", "DELETE_PRODUCT_FROM_CART"]),
    decreaseQuantity() {
      this.CHANGE_CART_PRODUCT_QUANTITY({ type: "decrease", id: this.id });
    },
    increaseQuantity() {
      this.CHANGE_CART_PRODUCT_QUANTITY({ type: "increase", id: this.id });
    },
    deleteProduct() {
      this.DELETE_PRODUCT_FROM_CART(this.id)
    }
  },
};
</script>

<style lang="scss">
  .cartItem {
    margin-bottom: 20px;

    &__img {
      max-width: 252px;
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