<template>
  <div class="products-filter">
    <div class="products-filter__select">
      Подкатегория товара:
      <b-form-select
        v-model="selected"
        :options="options"
      ></b-form-select>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
    <div class="products-filter__slider">
      <div>
        <label for="range-1">Минимальная цена: {{ minPrice }} р.</label>
        <b-form-input
          id="range-1"
          v-model="minPrice"
          type="range"
          min=0
          max=100000
        ></b-form-input>
      </div>
      <div>
        <label for="range-2">Максимальная цена: {{ maxPrice }} р.</label>
        <b-form-input
          id="range-2"
          v-model="maxPrice"
          type="range"
          min=0
          max=100000
        ></b-form-input>
      </div>
      <b-btn variant="info" @click="GET_PRODUCTS_BY_PRICE({minPrice, maxPrice})">Отфильтровать по цене</b-btn>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "ProductsFilter",
  data() {
    return {
      selected: "Все",
      minPrice: 0,
      maxPrice: 100000

    };
  },
  methods: {
    ...mapMutations(["FILTER_PRODUCTS_BY_SUBTYPE"]),
    ...mapActions(['GET_PRODUCTS_BY_PRICE']),
    equalPrices() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
    test() {
      return alert('2222')
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
  computed: {
    ...mapGetters(["SUBTYPES", "MIN_PRICE", "MAX_PRICE"]),
    minimalPrice() {
      return this.MIN_PRICE
    },
    options() {
      return ["Все", ...this.SUBTYPES];
    },
  },
  watch: {
    selected() {
      this.FILTER_PRODUCTS_BY_SUBTYPE(this.selected);
    },
    minPrice() {
      this.equalPrices()
    },
    maxPrice() {
      this.equalPrices()

    }
  },
};
</script>

<style lang="scss">
</style>