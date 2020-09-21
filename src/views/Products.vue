<template>
  <div class="products">
    <div class="container">
      <h1>Каталог товаров</h1>
      <router-link to='/' class="products__link"><b-icon icon="house-fill" variant="info"/>Вернуться на главную</router-link>
      <b-row>
        <b-col
          cols=12
          lg=3
        ><ProductsFilter /></b-col>
        <b-col
          cols=12
          lg=9
        >
          <div class="products__wrapper">
            <Product
              v-for="product in PRODUCTS"
              :key="product.id"
              :imageUrl="product.imageUrl"
              :title="product.title"
              :subtype="product.subtype"
              :price="product.price"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Products/Product";
import ProductsFilter from "@/components/Products/ProductsFilter";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Products",
  components: {
    Product,
    ProductsFilter
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API(this.$route.params.productType);
  },
};
</script>

<style lang="scss">
  .products {
    margin-top: 30px;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
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
</style>