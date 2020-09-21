<template>
  <div class="products-filter__select">
    Подкатегория товара:
    <b-form-select
      v-model="selected"
      :options="options"
    ></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ProductsFilterSelect",
  data() {
    return {
      selected: "Все",
    };
  },
  methods: {
    ...mapMutations(["FILTER_PRODUCTS_BY_SUBTYPE"]),
  },
  computed: {
    ...mapGetters(["SUBTYPES"]),
    options() {
      return ["Все", ...this.SUBTYPES];
    },
  },
  watch: {
    selected() {
      this.FILTER_PRODUCTS_BY_SUBTYPE(this.selected);
    },
  },
};
</script>

<style lang="scss">
  @media (max-width: 992px) {
    .products-filter__select {
      width: 70%;
      margin: 0 auto;
    }
  }

  @media (max-width: 575px) {
    .products-filter__select {
      width: 100%;
    }
  }
</style>