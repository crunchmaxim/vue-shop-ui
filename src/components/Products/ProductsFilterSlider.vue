<template>
  <div class="products-filter-slider">
    <div class="products-filter-slider__slider">
      <label for="range-1">Минимальная цена: {{ minPrice }} р.</label>
      <b-form-input
        id="range-1"
        v-model="minPrice"
        type="range"
        min=0
        max=100000
      ></b-form-input>
    </div>
    <div class="products-filter-slider__slider">
      <label for="range-2">Максимальная цена: {{ maxPrice }} р.</label>
      <b-form-input
        id="range-2"
        v-model="maxPrice"
        type="range"
        min=0
        max=100000
      ></b-form-input>
    </div>
    <b-btn
      variant="info"
      @click="GET_PRODUCTS_BY_PRICE({minPrice, maxPrice})"
    >Отфильтровать по цене</b-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductsFilterSlider",
  data() {
    return {
      minPrice: 0,
      maxPrice: 100000,
    };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_BY_PRICE"]),
    equalPrices() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
  watch: {
    minPrice() {
      this.equalPrices();
    },
    maxPrice() {
      this.equalPrices();
    },
  },
};
</script>

<style lang="scss">
  .products-filter-slider {
    margin-bottom: 20px;
  }

  @media (max-width: 992px) {
    .products-filter-slider {
      &__slider {
        width: 70%;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 575px) {
    .products-filter-slider {
      &__slider {
        width: 90%;
      }
    }
  }
</style>