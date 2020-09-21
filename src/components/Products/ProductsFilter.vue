<template>
  <div class="products-filter">
    <ProductsFilterSelect/>
    <ProductsFilterSlider/>
  </div>

</template>

<script>
import ProductsFilterSelect from '@/components/Products/ProductsFilterSelect';
import ProductsFilterSlider from '@/components/Products/ProductsFilterSlider';

export default {
  name: "ProductsFilter",
  components: {
    ProductsFilterSelect,
    ProductsFilterSlider
  },
};
</script>

<style lang="scss">
</style>